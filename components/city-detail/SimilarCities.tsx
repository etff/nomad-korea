import Link from 'next/link';
import { City } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getSimilarCities } from '@/lib/utils/cities';

interface SimilarCitiesProps {
  city: City;
}

export function SimilarCities({ city }: SimilarCitiesProps) {
  const similarCities = getSimilarCities(city.id, 3);

  if (similarCities.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>비슷한 도시</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {similarCities.map((similarCity) => (
          <Link
            key={similarCity.id}
            href={`/cities/${similarCity.slug}`}
            className="block"
          >
            <div className="p-4 border rounded-lg hover:bg-muted/50 hover:border-primary transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-lg mb-1">{similarCity.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {similarCity.region}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{similarCity.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>💵 {(similarCity.costOfLiving / 10000).toFixed(0)}만원</span>
                <span>•</span>
                <span>📡 {similarCity.internetSpeed} Mbps</span>
              </div>

              <div className="flex gap-1 flex-wrap">
                {similarCity.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
