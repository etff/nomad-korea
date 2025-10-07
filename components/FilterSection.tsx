import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterSection() {
  const quickFilters = [
    { icon: "☕", label: "카페 많음" },
    { icon: "💵", label: "저렴" },
    { icon: "📡", label: "인터넷 빠름" },
    { icon: "🌊", label: "바다" },
    { icon: "⛰️", label: "산" },
    { icon: "🌸", label: "봄 추천" },
  ];

  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Main Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              🔍
            </span>
            <Input
              type="text"
              placeholder="검색..."
              className="pl-10"
            />
          </div>

          {/* Region Filter */}
          <Select>
            <SelectTrigger>
              <span className="mr-2">📍</span>
              <SelectValue placeholder="지역: 전체" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="capital">수도권</SelectItem>
              <SelectItem value="gangwon">강원</SelectItem>
              <SelectItem value="chungcheong">충청</SelectItem>
              <SelectItem value="gyeongsang">경상</SelectItem>
              <SelectItem value="jeolla">전라</SelectItem>
              <SelectItem value="jeju">제주</SelectItem>
            </SelectContent>
          </Select>

          {/* Budget Filter */}
          <Select>
            <SelectTrigger>
              <span className="mr-2">💰</span>
              <SelectValue placeholder="예산: 전체" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="under100">100만원 이하</SelectItem>
              <SelectItem value="100-150">100-150만원</SelectItem>
              <SelectItem value="150-200">150-200만원</SelectItem>
              <SelectItem value="200-250">200-250만원</SelectItem>
              <SelectItem value="over250">250만원 이상</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select defaultValue="recommended">
            <SelectTrigger>
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">추천순</SelectItem>
              <SelectItem value="rating-high">평점 높은 순</SelectItem>
              <SelectItem value="rating-low">평점 낮은 순</SelectItem>
              <SelectItem value="cost-low">생활비 낮은 순</SelectItem>
              <SelectItem value="cost-high">생활비 높은 순</SelectItem>
              <SelectItem value="internet-fast">인터넷 속도 빠른 순</SelectItem>
              <SelectItem value="recent">최근 업데이트 순</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground mr-2">빠른 필터:</span>
          {quickFilters.map((filter, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="mr-1">{filter.icon}</span>
              {filter.label}
            </Badge>
          ))}
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            필터 초기화
          </Button>
        </div>
      </div>
    </section>
  );
}
