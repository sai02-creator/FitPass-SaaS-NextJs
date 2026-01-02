
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

  return (
    <div>ClassesPage</div>
  )
}

export default ClassesPage;