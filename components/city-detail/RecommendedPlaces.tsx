import { City } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RecommendedPlacesProps {
  city: City;
}

const placeTypeConfig = {
  cafe: { icon: '☕', label: '카페', color: 'bg-amber-100 text-amber-800' },
  coworking: { icon: '💼', label: '코워킹', color: 'bg-blue-100 text-blue-800' },
  library: { icon: '📚', label: '도서관', color: 'bg-green-100 text-green-800' },
};

export function RecommendedPlaces({ city }: RecommendedPlacesProps) {
  const places = city.recommendedPlaces;

  if (!places || places.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>추천 장소</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {places.map((place, index) => {
          const config = placeTypeConfig[place.type];
          return (
            <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-3xl">{config.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{place.name}</h4>
                    <Badge className={config.color} variant="secondary">
                      {config.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {place.description}
                  </p>
                  {place.address && (
                    <p className="text-xs text-muted-foreground">
                      📍 {place.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
