import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturedCity() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-8">
          ⭐⭐⭐ 이번 주 추천 도시 ⭐⭐⭐
        </h2>

        {/* Featured Card */}
        <Card className="overflow-hidden border-2 border-primary/50 shadow-xl">
          {/* Banner Image */}
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-primary/30 to-secondary/20">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-lg">
              [제주 성산일출봉 파노라마 뷰]
            </div>
            {/* Rank Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="text-lg px-4 py-2 bg-accent text-accent-foreground">
                #3
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* City Name & Rating */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">🏝️ 제주 (Jeju)</h3>
                <div className="flex items-center gap-2">
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  <span className="text-lg font-semibold">4.8 / 5.0</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary">#벚꽃명소</Badge>
              <Badge variant="secondary">#바다뷰</Badge>
              <Badge variant="secondary">#힐링</Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl mb-1">💵</div>
                <div className="font-semibold">월 200만원</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📡</div>
                <div className="font-semibold">80Mbps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">☕</div>
                <div className="font-semibold">150+ 카페</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">👥</div>
                <div className="font-semibold">45명 활동중</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🌡</div>
                <div className="font-semibold">18°C</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-6">
              &ldquo;자연과 함께하는 노마드 라이프의 최적지&rdquo;
            </p>

            {/* CTA Button */}
            <Button size="lg" className="w-full md:w-auto">
              자세히 보기 →
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
