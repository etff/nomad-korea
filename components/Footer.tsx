import Link from "next/link";

export function Footer() {
  const footerLinks = {
    service: [
      { name: "도시 찾기", href: "/cities" },
      { name: "리뷰 작성", href: "/reviews/new" },
      { name: "여행 계획", href: "/plan" },
    ],
    community: [
      { name: "블로그", href: "/blog" },
      { name: "뉴스레터", href: "/newsletter" },
    ],
    support: [
      { name: "FAQ", href: "/faq" },
      { name: "문의하기", href: "/contact" },
      { name: "이용약관", href: "/terms" },
      { name: "개인정보처리방침", href: "/privacy" },
    ],
    social: [
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "YouTube", href: "https://youtube.com" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Logo & Description */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🇰🇷</span>
            <span className="text-xl font-bold text-foreground">NomadKorea</span>
          </div>
          <p className="text-muted-foreground">
            대한민국 디지털 노마드를 위한 종합 플랫폼
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">서비스</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">커뮤니티</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">고객지원</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">소셜미디어</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 NomadKorea. All rights reserved.</p>
          <p>Made with ❤️ in Korea</p>
        </div>
      </div>
    </footer>
  );
}
