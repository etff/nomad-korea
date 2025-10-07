'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CityDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-14 flex items-center">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="gap-2"
          >
            ← 뒤로가기
          </Button>
        </div>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
}
