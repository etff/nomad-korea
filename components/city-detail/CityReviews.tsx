import { City, Review } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReviewCard } from '@/components/ReviewCard';
import { getCityReviews } from '@/lib/utils/cities';

interface CityReviewsProps {
  city: City;
}

export function CityReviews({ city }: CityReviewsProps) {
  const reviews = getCityReviews(city.id);

  if (reviews.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>리뷰 ({city.reviewCount})</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            아직 리뷰가 없습니다. 첫 리뷰를 남겨보세요!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>리뷰 ({reviews.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {reviews.slice(0, 5).map((review) => (
          <ReviewCard key={review.id} review={review} showCity={false} />
        ))}

        {reviews.length > 5 && (
          <p className="text-sm text-muted-foreground text-center pt-4">
            + {reviews.length - 5}개의 리뷰 더보기
          </p>
        )}
      </CardContent>
    </Card>
  );
}
