import { City } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CityOverviewProps {
  city: City;
}

export function CityOverview({ city }: CityOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>도시 개요</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Description */}
        <p className="text-lg leading-relaxed text-muted-foreground">
          {city.description}
        </p>

        {/* Tags */}
        <div>
          <h3 className="text-sm font-semibold mb-2">특징</h3>
          <div className="flex gap-2 flex-wrap">
            {city.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Stats Grid */}
        <div>
          <h3 className="text-sm font-semibold mb-3">주요 통계</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-1">💵</div>
              <div className="text-sm text-muted-foreground">월 생활비</div>
              <div className="text-lg font-semibold">
                {(city.costOfLiving / 10000).toFixed(0)}만원
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-1">📡</div>
              <div className="text-sm text-muted-foreground">인터넷 속도</div>
              <div className="text-lg font-semibold">{city.internetSpeed} Mbps</div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-1">☀️</div>
              <div className="text-sm text-muted-foreground">여름 평균 기온</div>
              <div className="text-lg font-semibold">{city.temperature.summer}°C</div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl mb-1">❄️</div>
              <div className="text-sm text-muted-foreground">겨울 평균 기온</div>
              <div className="text-lg font-semibold">{city.temperature.winter}°C</div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {city.highlights && city.highlights.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-2">주요 명소</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {city.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
