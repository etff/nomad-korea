'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { City } from "@/lib/types";
import { isBookmarked, toggleBookmark } from "@/lib/utils/bookmarks";

export interface CityCardProps {
  city: City;
  rank?: number;
}

export function CityCard({ city, rank }: CityCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(city.id));
  }, [city.id]);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation
    const newStatus = toggleBookmark(city.id);
    setBookmarked(newStatus);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          [{city.name} 대표 이미지]
        </div>
        {/* Rank Badge */}
        {rank && (
          <div className="absolute top-3 right-3">
            <Badge className="text-sm px-3 py-1 bg-accent text-accent-foreground">
              #{rank}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* City Name & Rating */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold">{city.name}</h3>
            <p className="text-sm text-muted-foreground">{city.region}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500">⭐</span>
          <span className="font-semibold">{city.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({city.reviewCount})
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div className="flex items-center gap-1">
            <span>💵</span>
            <span>{(city.costOfLiving / 10000).toFixed(0)}만원</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📡</span>
            <span>{city.internetSpeed} Mbps</span>
          </div>
          <div className="flex items-center gap-1">
            <span>☀️</span>
            <span>{city.temperature.summer}°C</span>
          </div>
          <div className="flex items-center gap-1">
            <span>❄️</span>
            <span>{city.temperature.winter}°C</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap mb-3">
          {city.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button variant="default" className="flex-1" asChild>
          <Link href={`/cities/${city.slug}`}>상세보기</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleBookmark}
          className={bookmarked ? 'text-red-500' : ''}
        >
          {bookmarked ? '♥' : '♡'}
        </Button>
      </CardFooter>
    </Card>
  );
}
