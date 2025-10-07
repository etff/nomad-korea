import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Review } from "@/lib/types";
import { mockUsers } from "@/lib/mock-data/users";
import { mockCities } from "@/lib/mock-data/cities";

interface ReviewCardProps {
  review: Review;
  showCity?: boolean;
}

export function ReviewCard({ review, showCity = true }: ReviewCardProps) {
  // Get user and city info
  const user = mockUsers.find(u => u.id === review.userId);
  const city = mockCities.find(c => c.id === review.cityId);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '어제';
    if (diffDays < 7) return `${diffDays}일 전`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
    return date.toLocaleDateString('ko-KR');
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.avatar || user?.name[0] || '?'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{user?.name || '익명'}</span>
                {showCity && city && (
                  <>
                    <span className="text-muted-foreground text-sm">|</span>
                    <span className="text-sm">{city.name}</span>
                  </>
                )}
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDate(review.createdAt)}
              </span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-semibold mb-2">{review.title}</h3>
        <p className="text-foreground mb-4 line-clamp-2">&ldquo;{review.content}&rdquo;</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              👍 {review.helpful}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
