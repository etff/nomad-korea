'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/lib/contexts/AuthContext";

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🇰🇷</span>
          <span className="text-xl font-bold text-foreground">NomadKorea</span>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/cities"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            도시 찾기
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            커뮤니티
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            블로그
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{user?.name?.[0] || '?'}</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm font-medium">
                  {user?.name}
                </span>
              </div>
              <Button variant="ghost" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">로그인</Link>
              </Button>
              <Button asChild className="hidden md:inline-flex">
                <Link href="/register">회원가입</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
