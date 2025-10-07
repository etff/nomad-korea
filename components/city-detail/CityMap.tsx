import { City } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CityMapProps {
  city: City;
}

export function CityMap({ city }: CityMapProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>지도</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">🗺️</div>
            <div className="text-lg font-semibold mb-1">{city.name} 지도</div>
            <div className="text-sm">
              {city.region} 지역
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
