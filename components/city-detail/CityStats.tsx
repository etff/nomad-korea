import { City } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CityStatsProps {
  city: City;
}

export function CityStats({ city }: CityStatsProps) {
  // Calculate relative scores (1-5 scale)
  const costScore = Math.max(1, Math.min(5, 5 - (city.costOfLiving / 1000000)));
  const internetScore = Math.min(5, (city.internetSpeed / 60));
  const ratingScore = city.rating;

  const stats = [
    {
      label: '비용 효율성',
      value: costScore.toFixed(1),
      max: 5,
      percentage: (costScore / 5) * 100,
      color: 'bg-green-500',
    },
    {
      label: '인터넷 품질',
      value: internetScore.toFixed(1),
      max: 5,
      percentage: (internetScore / 5) * 100,
      color: 'bg-blue-500',
    },
    {
      label: '종합 평점',
      value: ratingScore.toFixed(1),
      max: 5,
      percentage: (ratingScore / 5) * 100,
      color: 'bg-yellow-500',
    },
  ];

  // Transportation info
  const transportationInfo = city.transportation;
  const climateInfo = city.climate;

  return (
    <div className="space-y-6">
      {/* Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle>상세 통계</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{stat.label}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.value} / {stat.max}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`${stat.color} h-2 rounded-full transition-all`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Transportation Card */}
      {transportationInfo && (
        <Card>
          <CardHeader>
            <CardTitle>교통 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚇</span>
              <div>
                <div className="text-sm text-muted-foreground">지하철</div>
                <div className="font-medium">
                  {transportationInfo.subway ? '있음' : '없음'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🚌</span>
              <div>
                <div className="text-sm text-muted-foreground">버스</div>
                <div className="font-medium">{transportationInfo.bus}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✈️</span>
              <div>
                <div className="text-sm text-muted-foreground">공항 접근성</div>
                <div className="font-medium">{transportationInfo.airport}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🚶</span>
              <div>
                <div className="text-sm text-muted-foreground">도보 편의성</div>
                <div className="font-medium">
                  {'⭐'.repeat(transportationInfo.walkability)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Climate Card */}
      {climateInfo && (
        <Card>
          <CardHeader>
            <CardTitle>기후 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">봄 🌸</div>
                <div className="text-sm">{climateInfo.spring}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">여름 ☀️</div>
                <div className="text-sm">{climateInfo.summer}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">가을 🍂</div>
                <div className="text-sm">{climateInfo.fall}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">겨울 ❄️</div>
                <div className="text-sm">{climateInfo.winter}</div>
              </div>
            </div>

            {climateInfo.rainySeasonStart && (
              <div className="pt-2 border-t">
                <div className="text-sm text-muted-foreground">장마철</div>
                <div className="text-sm">
                  {climateInfo.rainySeasonStart} ~ {climateInfo.rainySeasonEnd}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
