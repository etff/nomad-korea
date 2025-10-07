# 🚀 NomadKorea 점진적 개선 계획

---

## **Phase 1: 인증 시스템 개선 및 Mock 데이터 인프라 구축**

### 📋 오버뷰
Supabase 의존성을 제거하고 가짜 데이터 기반의 인증 시스템으로 전환합니다. 프로젝트 전반에 걸쳐 사용할 Mock 데이터 구조와 타입을 정의하고, 중앙화된 데이터 관리 시스템을 구축합니다.

### ✅ 수정/개선 사항

- [x] `middleware.ts` Supabase 인증 로직 제거 및 가짜 세션 체크로 변경
- [x] 환경 변수 의존성 제거 (NEXT_PUBLIC_SUPABASE_* 불필요)
- [x] `/app/login/actions.ts` - Supabase 대신 localStorage 기반 가짜 로그인 구현
- [x] `/app/register/actions.ts` - 가짜 회원가입 구현 (localStorage에 사용자 정보 저장)
- [x] `/lib/mock-data/` 디렉토리 생성 및 데이터 파일 구조화
  - [x] `cities.ts` - 20개 도시 Mock 데이터
  - [x] `reviews.ts` - 리뷰 Mock 데이터
  - [x] `users.ts` - 사용자 Mock 데이터
  - [x] `meetups.ts` - 밋업 Mock 데이터
- [x] `/lib/types/` 디렉토리에 TypeScript 타입 정의
  - [x] `City`, `Review`, `User`, `Meetup` 인터페이스
- [x] `/lib/utils/auth.ts` - 가짜 인증 헬퍼 함수 (getCurrentUser, logout, etc.)
- [x] Context API 또는 상태 관리 설정 (`/lib/contexts/AuthContext.tsx`)
- [x] Header 컴포넌트 - 로그인 상태에 따른 UI 변경 (프로필/로그아웃 버튼)

### 🔍 검증/확인 사항

- [x] 로그인 페이지에서 이메일/비밀번호 입력 시 가짜 인증 성공
- [x] 회원가입 시 localStorage에 사용자 정보 저장 확인
- [x] 로그인 후 메인 페이지로 리다이렉트
- [x] Header에 로그인된 사용자 정보 표시
- [x] 로그아웃 시 localStorage 클리어 및 로그인 페이지로 리다이렉트
- [x] 미들웨어가 보호된 경로에서 정상 작동 (로그인 안 했을 때 /login으로 리다이렉트)
- [x] Console에 Supabase 관련 에러 없음
- [x] `npm run build` 성공 (환경 변수 에러 없음)

---

## **Phase 2: 도시 상세 페이지 및 동적 라우팅 구현**

### 📋 오버뷰
개별 도시의 상세 정보를 보여주는 페이지를 구현합니다. 도시 개요, 상세 통계, 지도, 추천 장소, 리뷰 등을 포함한 풍부한 정보를 제공합니다.

### ✅ 수정/개선 사항

- [x] `/app/cities/[slug]/page.tsx` - 도시 상세 페이지 생성
- [x] `/app/cities/[slug]/layout.tsx` - 도시 페이지 레이아웃 (뒤로가기, 공유 버튼)
- [x] `/components/city-detail/` 디렉토리 생성 및 컴포넌트 분리
  - [x] `CityHero.tsx` - 도시 히어로 섹션 (배너 이미지, 이름, 평점)
  - [x] `CityOverview.tsx` - 도시 개요 및 주요 통계
  - [x] `CityStats.tsx` - 상세 통계 차트 (생활비, 인터넷 속도 등)
  - [x] `CityReviews.tsx` - 해당 도시 리뷰 목록
  - [x] `RecommendedPlaces.tsx` - 추천 카페/코워킹 스페이스
  - [x] `CityMap.tsx` - 지도 (정적 이미지 또는 간단한 마커)
  - [x] `SimilarCities.tsx` - 비슷한 도시 추천
- [x] `/lib/utils/cities.ts` - 도시 데이터 조회 헬퍼 함수
  - [x] `getCityBySlug()`, `getSimilarCities()`, `getCityReviews()`
- [x] `CityCard.tsx` - "상세보기" 버튼에 Link 추가 (`/cities/[slug]`)
- [x] Mock 데이터에 도시별 상세 정보 추가 (추천 장소, 교통, 날씨 등)
- [x] 북마크 버튼 기능 구현 (localStorage에 저장)

### 🔍 검증/확인 사항

- [x] 메인 페이지 도시 카드에서 "상세보기" 클릭 시 해당 도시 페이지로 이동
- [x] 도시 상세 페이지에서 모든 정보 정상 표시 (개요, 통계, 리뷰)
- [x] 뒤로가기 버튼 작동
- [x] 북마크 버튼 클릭 시 localStorage에 저장 및 UI 업데이트
- [x] 비슷한 도시 클릭 시 해당 도시 페이지로 이동
- [x] 20개 모든 도시에 대해 페이지 정상 렌더링
- [x] 모바일/태블릿 반응형 레이아웃 확인
- [x] 존재하지 않는 도시 slug 접근 시 404 또는 에러 처리

---

## **Phase 3: 실시간 검색 및 필터링 기능 구현**

### 📋 오버뷰
FilterSection 컴포넌트에 실제 검색, 필터링, 정렬 로직을 구현합니다. 사용자가 선택한 조건에 따라 도시 목록이 실시간으로 업데이트되도록 합니다.

### ✅ 수정/개선 사항

- [ ] `/lib/contexts/FilterContext.tsx` - 필터 상태 관리 Context 생성
- [ ] `/lib/utils/filtering.ts` - 필터링/정렬 유틸리티 함수
  - [ ] `filterCities()`, `sortCities()`, `searchCities()`
- [ ] `FilterSection.tsx` - 상태 관리 및 이벤트 핸들러 추가
  - [ ] 검색어 입력 시 실시간 필터링
  - [ ] 지역/예산 Select 변경 시 필터 업데이트
  - [ ] 정렬 옵션 변경 시 정렬 적용
  - [ ] 빠른 필터 태그 클릭 시 필터 토글
  - [ ] "필터 초기화" 버튼 기능
- [ ] `CityCardsGrid.tsx` - FilterContext 사용하여 필터링된 도시 표시
- [ ] 필터 적용 시 URL 쿼리 파라미터 업데이트 (공유 가능한 URL)
- [ ] 검색 결과 개수 표시 ("20개 도시 중 5개 표시")
- [ ] 검색 결과 없을 때 EmptyState 컴포넌트 표시
- [ ] 로딩 스켈레톤 UI 추가 (필터 변경 시)

### 🔍 검증/확인 사항

- [ ] 검색창에 도시 이름 입력 시 실시간 필터링
- [ ] 지역 필터 선택 시 해당 지역 도시만 표시
- [ ] 예산 필터 선택 시 해당 범위 도시만 표시
- [ ] 정렬 옵션 변경 시 도시 목록 재정렬 (평점순, 생활비순 등)
- [ ] 빠른 필터 태그 클릭 시 활성화/비활성화 토글
- [ ] 여러 필터 동시 적용 시 AND 조건으로 필터링
- [ ] "필터 초기화" 클릭 시 모든 필터 리셋
- [ ] URL 쿼리 파라미터로 필터 상태 공유 가능
- [ ] 검색 결과 개수 정확히 표시
- [ ] 결과 없을 때 적절한 메시지 표시

---

## **Phase 4: 리뷰 시스템 구현**

### 📋 오버뷰
사용자가 도시에 대한 리뷰를 작성, 수정, 삭제할 수 있는 시스템을 구현합니다. 평점, 사진, 태그 등을 포함한 풍부한 리뷰 기능을 제공합니다.

### ✅ 수정/개선 사항

- [ ] `/app/reviews/[id]/page.tsx` - 리뷰 상세 페이지
- [ ] `/app/cities/[slug]/reviews/new/page.tsx` - 리뷰 작성 페이지
- [ ] `/components/reviews/` 디렉토리 생성
  - [ ] `ReviewCard.tsx` - 리뷰 카드 컴포넌트 (개선)
  - [ ] `ReviewForm.tsx` - 리뷰 작성/수정 폼
  - [ ] `ReviewRating.tsx` - 별점 입력/표시 컴포넌트
  - [ ] `ReviewStats.tsx` - 리뷰 통계 (평균 평점, 분포 등)
  - [ ] `ReviewFilters.tsx` - 리뷰 필터 (별점별, 최신순)
- [ ] `/lib/utils/reviews.ts` - 리뷰 CRUD 헬퍼 함수
  - [ ] `getReviews()`, `getReviewById()`, `createReview()`, `updateReview()`, `deleteReview()`
- [ ] Mock 데이터에 리뷰 추가 정보 (사진 URL, 좋아요 수, 댓글)
- [ ] RecentReviews 컴포넌트 개선 (Mock 데이터 연동)
- [ ] 리뷰 좋아요/도움됨 기능 (localStorage)
- [ ] 리뷰 정렬 (최신순, 인기순, 평점순)
- [ ] 내가 작성한 리뷰 수정/삭제 기능

### 🔍 검증/확인 사항

- [ ] 도시 상세 페이지에서 "리뷰 작성" 버튼 클릭 시 작성 페이지로 이동
- [ ] 리뷰 폼에서 별점, 제목, 내용 입력 후 제출 시 localStorage에 저장
- [ ] 작성된 리뷰가 해당 도시 페이지와 메인 페이지 최근 리뷰에 표시
- [ ] 리뷰 카드 클릭 시 상세 페이지로 이동
- [ ] 본인 리뷰만 수정/삭제 버튼 표시
- [ ] 리뷰 수정 시 기존 데이터 로드 및 업데이트 정상 작동
- [ ] 리뷰 삭제 시 확인 모달 표시 후 삭제
- [ ] 리뷰 좋아요 기능 정상 작동 (중복 방지)
- [ ] 리뷰 필터/정렬 기능 정상 작동
- [ ] 도시별 평균 평점 계산 정확

---

## **Phase 5: 사용자 프로필 및 마이페이지 구현**

### 📋 오버뷰
사용자 프로필 페이지와 마이페이지를 구현하여 개인 정보, 작성한 리뷰, 북마크한 도시, 활동 내역 등을 관리할 수 있도록 합니다.

### ✅ 수정/개선 사항

- [ ] `/app/profile/page.tsx` - 내 프로필 페이지
- [ ] `/app/profile/edit/page.tsx` - 프로필 수정 페이지
- [ ] `/app/users/[id]/page.tsx` - 다른 사용자 프로필 보기
- [ ] `/components/profile/` 디렉토리 생성
  - [ ] `ProfileHeader.tsx` - 프로필 헤더 (아바타, 이름, 통계)
  - [ ] `ProfileTabs.tsx` - 탭 네비게이션 (리뷰, 북마크, 활동)
  - [ ] `MyReviews.tsx` - 내가 작성한 리뷰 목록
  - [ ] `MyBookmarks.tsx` - 북마크한 도시 목록
  - [ ] `ActivityTimeline.tsx` - 활동 내역 타임라인
  - [ ] `ProfileEditForm.tsx` - 프로필 수정 폼
- [ ] `/lib/utils/profile.ts` - 프로필 관리 헬퍼 함수
- [ ] Header 컴포넌트에 프로필 드롭다운 메뉴 추가
- [ ] 북마크 기능 완성 (Phase 2에서 시작한 부분)
- [ ] 사용자 뱃지/레벨 시스템 (리뷰 개수에 따라)
- [ ] 프로필 이미지 업로드 (base64 또는 URL)

### 🔍 검증/확인 사항

- [ ] Header 프로필 아이콘 클릭 시 드롭다운 메뉴 표시
- [ ] "내 프로필" 클릭 시 프로필 페이지로 이동
- [ ] 프로필 페이지에서 내 정보, 통계 정확히 표시
- [ ] 탭 전환 시 해당 콘텐츠 표시 (리뷰, 북마크, 활동)
- [ ] "프로필 수정" 버튼 클릭 시 수정 페이지로 이동
- [ ] 프로필 수정 후 저장 시 localStorage 업데이트
- [ ] 내 리뷰 목록 정확히 표시
- [ ] 북마크한 도시 목록 정확히 표시
- [ ] 다른 사용자 프로필 페이지 접근 가능 (제한된 정보만 표시)
- [ ] 사용자 뱃지/레벨 정확히 계산 및 표시

---

## **Phase 6: 커뮤니티 및 밋업 기능 구현**

### 📋 오버뷰
디지털 노마드들이 모일 수 있는 밋업 기능과 커뮤니티 게시판을 구현합니다. 도시별, 주제별 밋업을 생성하고 참가할 수 있으며, 자유롭게 정보를 공유할 수 있는 게시판을 제공합니다.

### ✅ 수정/개선 사항

- [ ] `/app/meetups/page.tsx` - 밋업 목록 페이지
- [ ] `/app/meetups/[id]/page.tsx` - 밋업 상세 페이지
- [ ] `/app/meetups/new/page.tsx` - 밋업 생성 페이지
- [ ] `/app/community/page.tsx` - 커뮤니티 게시판
- [ ] `/app/community/[id]/page.tsx` - 게시글 상세
- [ ] `/components/meetups/` 디렉토리 생성
  - [ ] `MeetupCard.tsx` - 밋업 카드
  - [ ] `MeetupFilters.tsx` - 밋업 필터 (도시별, 날짜별)
  - [ ] `MeetupForm.tsx` - 밋업 생성/수정 폼
  - [ ] `AttendeesList.tsx` - 참가자 목록
  - [ ] `MeetupCalendar.tsx` - 밋업 캘린더 뷰
- [ ] `/components/community/` 디렉토리 생성
  - [ ] `PostCard.tsx` - 게시글 카드
  - [ ] `PostForm.tsx` - 게시글 작성/수정 폼
  - [ ] `CommentSection.tsx` - 댓글 섹션
- [ ] `/lib/utils/meetups.ts` - 밋업 CRUD 헬퍼 함수
- [ ] `/lib/utils/community.ts` - 커뮤니티 CRUD 헬퍼 함수
- [ ] Header 네비게이션에 "밋업", "커뮤니티" 메뉴 추가
- [ ] QuickStats 컴포넌트에 밋업 수 Mock 데이터 연동
- [ ] 밋업 참가/취소 기능 (localStorage)
- [ ] 게시글 좋아요/댓글 기능

### 🔍 검증/확인 사항

- [ ] Header "밋업" 메뉴 클릭 시 밋업 목록 페이지로 이동
- [ ] 밋업 목록 페이지에서 모든 밋업 카드 표시
- [ ] 밋업 필터링 (도시별, 날짜별, 주제별) 정상 작동
- [ ] "밋업 만들기" 버튼 클릭 시 생성 페이지로 이동
- [ ] 밋업 생성 폼 작성 후 제출 시 localStorage에 저장
- [ ] 밋업 상세 페이지에서 정보, 참가자 목록 표시
- [ ] 밋업 참가/취소 버튼 정상 작동
- [ ] 내가 참가한 밋업 프로필에 표시
- [ ] 커뮤니티 게시판에서 게시글 목록 표시
- [ ] 게시글 작성/수정/삭제 기능 정상 작동
- [ ] 댓글 작성/삭제 기능 정상 작동
- [ ] 게시글 좋아요 기능 정상 작동

---

## **추가 개선 사항 (Optional Phases)**

### Phase 7: UI/UX 개선 및 애니메이션
- [ ] 페이지 전환 애니메이션
- [ ] 스켈레톤 로딩 개선
- [ ] 다크 모드 구현
- [ ] 접근성 개선 (ARIA 레이블, 키보드 네비게이션)

### Phase 8: 성능 최적화
- [ ] 이미지 최적화 (Next.js Image 컴포넌트)
- [ ] 코드 스플리팅
- [ ] 메모이제이션 (React.memo, useMemo)
- [ ] Virtual scrolling (긴 목록)

### Phase 9: PWA 및 오프라인 지원
- [ ] Service Worker 설정
- [ ] 오프라인 캐싱
- [ ] 설치 가능한 앱
