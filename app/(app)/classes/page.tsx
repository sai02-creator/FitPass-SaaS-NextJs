import { getUserPreferences } from "@/lib/actions/profile";
import { getBoundingBox } from "@/lib/utils/distance";
import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY, USER_BOOKED_SESSION_IDS_QUERY, VENUE_NAME_BY_ID_QUERY } from "@/sanity/lib/queries";
import { FILTERED_SESSIONS_QUERY, SEARCH_SESSIONS_QUERY } from "@/sanity/lib/queries/sessions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    venue?: string;
    category?: string;
    tier?: string;
  }>;
}



async function ClassesPage({ searchParams }: PageProps) {
    const {
    q: searchQuery,
    venue: venueId,
    category: categoryParam,
    tier: tierParam,
  } = await searchParams;
  const { userId } = await auth();

   // Parse multi-value filter params (comma-separated)
  const categoryIds = categoryParam
    ? categoryParam.split(",").filter(Boolean)
    : [];
  const tierLevels = tierParam ? tierParam.split(",").filter(Boolean) : [];

  // Get user preferences first - needed for bounding box calculation
  const userPreferences = await getUserPreferences();

  // User preferences are always set via onboarding - redirect if missing
  if (!userPreferences?.location || !userPreferences?.searchRadius) {
    redirect("/onboarding");
  }

  const { location, searchRadius } = userPreferences;

  // GEOGRAPHIC FILTERING - Two-step approach for performance:
  //
  // Step 1 (Database): Calculate a rectangular bounding box from user's location + radius.
  // This is passed to GROQ to filter at the database level, reducing 100k+ global sessions
  // down to ~100-500 sessions within the user's general area.
  //
  // Step 2 (Client): The filterSessionsByDistance() function further refines results using
  // the Haversine formula for accurate circular distance calculation. This handles the
  // corner cases where the rectangular bounding box extends beyond the circular radius.
  const { minLat, maxLat, minLng, maxLng } = getBoundingBox(
    location.lat,
    location.lng,
    searchRadius,
  );

   // Determine which query to use based on search vs filters
  // Both queries include bounding box params for geographic pre-filtering
  const sessionsQuery = searchQuery
    ? sanityFetch({
        query: SEARCH_SESSIONS_QUERY,
        params: { searchTerm: searchQuery, minLat, maxLat, minLng, maxLng },
      })
    : sanityFetch({
        query: FILTERED_SESSIONS_QUERY,
        params: {
          venueId: venueId || "",
          categoryIds,
          tierLevels,
          minLat,
          maxLat,
          minLng,
          maxLng,
        },
      });


  // Fetch venue name if venue filter is active
  const venueNameQuery = venueId
    ? sanityFetch({
        query: VENUE_NAME_BY_ID_QUERY,
        params: { venueId },
      })
    : Promise.resolve({ data: null });

     const [
    sessionsResult,
    categoriesResult,
    bookedSessionsResult,
    venueNameResult,
  ] = await Promise.all([
    sessionsQuery,
    sanityFetch({ query: CATEGORIES_QUERY }),
    userId
      ? sanityFetch({
          query: USER_BOOKED_SESSION_IDS_QUERY,
          params: { clerkId: userId },
        })
      : Promise.resolve({ data: [] }),
    venueNameQuery,
  ]);

  const allSessions = sessionsResult.data;
  const categories = categoriesResult.data;
  const venueName = venueNameResult.data?.name || null;
  // Filter out null values from booked session IDs
  const bookedIds: (string | null)[] = bookedSessionsResult.data || [];
  const filteredBookedIds = bookedIds.filter((id): id is string => id !== null);
  const bookedSessionIds = new Set(filteredBookedIds);

  // Count active filters for badge display
  const activeFilterCount =
    (venueId ? 1 : 0) + categoryIds.length + tierLevels.length;

  // Filter sessions that have valid startTime for the distance filter
  const sessionsForFilter = allSessions
    .filter((s) => s.startTime !== null)
    .map((s) => ({
      ...s,
      startTime: s.startTime as string,
    }));



  return (
    <div>ClassesPage</div>
  )
}

export default ClassesPage;