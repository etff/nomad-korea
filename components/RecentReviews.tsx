import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ReviewCardProps {
  author: string;
  city: string;
  rating: number;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

function ReviewCard({ author, city, rating, date, content, likes, comments }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {author[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{author}</span>
                <span className="text-muted-foreground text-sm">|</span>
                <span className="text-sm">{city}</span>
              </div>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-foreground mb-4 line-clamp-2">&ldquo;{content}&rdquo;</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              👍 {likes}
            </span>
            <span className="flex items-center gap-1">
              💬 {comments}
            </span>
          </div>
          <Button variant="ghost" size="sm">
            전체보기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function RecentReviews() {
  const reviews: ReviewCardProps[] = [
    {
      author: "디지털노마드김",
      city: "서울",
      rating: 5,
      date: "2일 전",
      content: "강남 카페에서 일주일 작업했는데 인터넷 속도 최고! 주변에 먹을 것도 많아요.",
      likes: 24,
      comments: 5,
    },
    {
      author: "제주러버",
      city: "제주",
      rating: 5,
      date: "5일 전",
      content: "성산일출봉 근처에서 한 달 살았어요. 자연 속 힐링하며 집중도 최고였습니다!",
      likes: 18,
      comments: 3,
    },
    {
      author: "부산생활자",
      city: "부산",
      rating: 4,
      date: "1주 전",
      content: "해운대 근처 코워킹 스페이스 좋아요. 바다 보면서 일하니 스트레스가 풀려요.",
      likes: 32,
      comments: 8,
    },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">💬 최근 리뷰</h2>
          <Button variant="link" className="text-primary">
            모든 리뷰 보기 →
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
