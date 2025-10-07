import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-primary/20 via-background to-secondary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder-seoul.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-lg">
          🌏 대한민국, 당신의 다음 노마드 라이프
        </h1>

        {/* Sub Headline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          전국 20개 도시의 생생한 노마드 라이프 정보
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                🔍
              </span>
              <Input
                type="text"
                placeholder="도시 이름 또는 키워드 검색..."
                className="pl-10 h-12 text-base bg-card"
              />
            </div>
            <Button size="lg" className="h-12 px-8">
              검색
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <Button size="lg" variant="default" className="text-lg px-8 py-6 h-auto">
          🎯 내 맞춤 도시 찾기
        </Button>
      </div>
    </section>
  );
}
