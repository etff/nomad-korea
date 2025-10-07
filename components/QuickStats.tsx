import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6 text-center">
        <div className="text-4xl mb-2">{icon}</div>
        <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

export function QuickStats() {
  const stats = [
    { icon: "🏙️", value: "20개", label: "등록 도시" },
    { icon: "👥", value: "1,247명", label: "활동 노마드" },
    { icon: "📝", value: "3,891개", label: "작성된 리뷰" },
    { icon: "🥤", value: "156회", label: "월 밋업" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
