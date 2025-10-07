'use client';

import { City } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { isBookmarked, toggleBookmark } from '@/lib/utils/bookmarks';

interface CityHeroProps {
  city: City;
}

export function CityHero({ city }: CityHeroProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(city.id));
  }, [city.id]);

  const handleBookmark = () => {
    const newStatus = toggleBookmark(city.id);
    setBookmarked(newStatus);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `NomadKorea - ${city.name}`,
        text: city.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 to-secondary/10">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-30">
        <span className="text-6xl">[{city.name} 배경 이미지]</span>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
        <div className="container mx-auto">
          <div className="flex items-end justify-between">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-2">{city.name}</h1>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">⭐</span>
                  <span className="text-2xl font-semibold">{city.rating}</span>
                  <span className="text-lg text-gray-300">({city.reviewCount} 리뷰)</span>
                </div>
                <span className="text-lg text-gray-300">|</span>
                <span className="text-lg text-gray-300">{city.region}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant={bookmarked ? 'default' : 'outline'}
                size="lg"
                onClick={handleBookmark}
                className="bg-white/90 hover:bg-white text-black border-0"
              >
                {bookmarked ? '♥' : '♡'} 북마크
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleShare}
                className="bg-white/90 hover:bg-white text-black border-0"
              >
                🔗 공유
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
