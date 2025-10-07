import { Button } from "@/components/ui/button";

export function CTASection() {
  const features = [
    "✓ 20개 도시의 상세 정보",
    "✓ 활발한 커뮤니티",
    "✓ 실시간 리뷰와 평가",
    "✓ 정기 밋업 및 이벤트 (준비중)",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          🚀 지금 바로 시작하세요!
        </h2>

        {/* Sub Headline */}
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          전국 어디든 당신의 노마드 라이프를 시작할 준비가 되어 있습니다
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-lg font-medium text-foreground"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            무료로 시작하기
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
            더 알아보기
          </Button>
        </div>
      </div>
    </section>
  );
}
