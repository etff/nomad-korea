import { notFound } from 'next/navigation';
import { getCityBySlug, getAllCities } from '@/lib/utils/cities';
import { CityHero } from '@/components/city-detail/CityHero';
import { CityOverview } from '@/components/city-detail/CityOverview';
import { CityStats } from '@/components/city-detail/CityStats';
import { CityReviews } from '@/components/city-detail/CityReviews';
import { RecommendedPlaces } from '@/components/city-detail/RecommendedPlaces';
import { CityMap } from '@/components/city-detail/CityMap';
import { SimilarCities } from '@/components/city-detail/SimilarCities';

interface CityDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <CityHero city={city} />

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CityOverview city={city} />
            <RecommendedPlaces city={city} />
            <CityReviews city={city} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <CityStats city={city} />
            <CityMap city={city} />
            <SimilarCities city={city} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all cities
export async function generateStaticParams() {
  const cities = getAllCities();

  return cities.map((city) => ({
    slug: city.slug,
  }));
}
