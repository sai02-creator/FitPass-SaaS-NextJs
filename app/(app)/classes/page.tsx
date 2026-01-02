
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

  return (
    <div>ClassesPage</div>
  )
}

export default ClassesPage;