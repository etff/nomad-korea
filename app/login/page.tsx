import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { login } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        {/* Logo and Title */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center justify-center space-x-2">
            <span className="text-4xl">🇰🇷</span>
            <span className="text-2xl font-bold text-foreground">NomadKorea</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">로그인</h1>
          <p className="text-sm text-muted-foreground">
            디지털 노마드 여정을 계속하세요
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              이메일
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              비밀번호
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full"
            />
          </div>

          <Button formAction={login} type="submit" className="w-full">
            로그인
          </Button>
        </form>

        {/* Sign up link */}
        <div className="text-center text-sm">
          <span className="text-muted-foreground">아직 계정이 없으신가요? </span>
          <Link href="/register" className="text-primary font-medium hover:underline">
            회원가입
          </Link>
        </div>
      </Card>
    </div>
  );
}
