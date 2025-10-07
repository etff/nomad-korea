import { CityCard } from "./CityCard";
import { Button } from "@/components/ui/button";
import { mockCities } from "@/lib/mock-data/cities";

export function CityCardsGrid() {
  // Temporarily using first 6 cities
  const cities = mockCities.slice(0, 6);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cities.map((city, index) => (
            <CityCard key={city.id} city={city} rank={index + 1} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            더 많은 도시 보기 ↓
          </Button>
        </div>
      </div>
    </section>
  );
}
