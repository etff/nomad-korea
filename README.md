# NomadKorea - 대한민국 디지털 노마드 플랫폼

전국 20개 도시의 생생한 노마드 라이프 정보를 제공하는 플랫폼입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Font**: Geist Sans, Geist Mono

## 🎨 주요 기능 (UI)

- ✅ 헤더 (Sticky Navigation)
- ✅ 히어로 섹션 (검색 기능 포함)
- ✅ 통계 카드 (Quick Stats)
- ✅ 필터링 및 정렬 시스템
- ✅ 추천 도시 (Featured City)
- ✅ 도시 카드 그리드 (반응형)
- ✅ 최근 리뷰
- ✅ CTA 섹션
- ✅ 푸터

## 🎯 디자인 시스템

### 색상 팔레트

- **Primary**: #00BFA5 (청록색)
- **Secondary**: #FF6F00 (주황색)
- **Accent**: #FFD600 (노란색)
- **Background**: #F5F5F5
- **Text (Dark)**: #212121
- **Text (Light)**: #757575

### 반응형 레이아웃

- **Desktop** (1200px+): 3열 그리드
- **Tablet** (768-1199px): 2열 그리드
- **Mobile** (<768px): 1열 그리드

## 📦 설치 및 실행

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
nomad-korea/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 홈페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── Header.tsx          # 헤더 컴포넌트
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── QuickStats.tsx      # 통계 카드
│   ├── FilterSection.tsx   # 필터링 섹션
│   ├── FeaturedCity.tsx    # 추천 도시
│   ├── CityCard.tsx        # 도시 카드
│   ├── CityCardsGrid.tsx   # 도시 카드 그리드
│   ├── RecentReviews.tsx   # 최근 리뷰
│   ├── CTASection.tsx      # CTA 섹션
│   └── Footer.tsx          # 푸터
└── components/ui/          # Shadcn UI 컴포넌트
```

## 📝 주요 컴포넌트

### Header
- Sticky 네비게이션
- 로고, 메뉴, 로그인/회원가입 버튼

### HeroSection
- 배경 이미지
- 검색창
- CTA 버튼

### QuickStats
- 4개의 통계 카드 (도시 수, 노마드 수, 리뷰 수, 밋업 수)

### FilterSection
- 검색창
- 지역/예산 필터
- 정렬 옵션
- 빠른 필터 태그

### FeaturedCity
- 이번 주 추천 도시 대형 배너

### CityCardsGrid
- 도시 카드 그리드 (반응형)
- 도시별 정보 카드

### RecentReviews
- 최근 리뷰 3개 표시

### CTASection
- 회원가입 유도 섹션

### Footer
- 링크 그룹
- 소셜미디어
- 저작권 정보

## 🔧 커스터마이징

색상 팔레트는 `app/globals.css`에서 CSS 변수로 관리됩니다:

```css
:root {
  --primary: #00BFA5;
  --secondary: #FF6F00;
  --accent: #FFD600;
  /* ... */
}
```

## 📄 라이선스

© 2025 NomadKorea. All rights reserved.

Made with ❤️ in Korea
