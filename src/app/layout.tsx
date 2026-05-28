// 루트 레이아웃: 모든 페이지에 공통으로 적용되는 최상위 컴포넌트
// SEO 메타데이터, 폰트, Lenis 스크롤이 여기서 설정됩니다
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/layout/LenisProvider';

// ===== 모바일 뷰포트 설정 (Next.js 14 권장 방식) =====
// 모바일 브라우저에서 화면 너비 맞춤 및 초기 배율 고정
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// ===== SEO 메타데이터 설정 =====
export const metadata: Metadata = {
  title: "헤드스파 교육·두피관리사 자격증 | 대구 BBTT 윤소연",
  description: "국제대회 수상 강사가 직접 지도하는 헤드스파·두피관리·근막관리 전문가 과정. 두피관리사 자격증, 헤드스파 강사 양성, BBTT 정규 교육. 베트남·스리랑카·몽골 국제 강의.",
  keywords: "헤드스파 교육, 두피관리사 자격증, 헤드스파 강사, 림프마사지 교육, 에스테틱 강사, 대구 헤드스파, BBTT, 바디밸런스, 피부관리사 스킬업",
  authors: [{ name: '윤소연' }],
  verification: {
    google: '89259iO8gCvABhsT8E7hCl0Wn6NhSbpzdTWiPqJsOpA',
    other: { 'naver-site-verification': '9eac2443477ede31e1c8d675badfd8f5dcebe7cb' },
  },
  openGraph: {
    title: "헤드스파 교육·두피관리사 자격증 | 윤소연 COSMICO KOREA",
    description: "국제대회 수상 강사가 직접 지도하는 헤드스파 전문가 양성 과정",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="ko": 한국어 페이지 설정 (SEO, 접근성에 중요)
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        {/* LenisProvider: 부드러운 스크롤 전역 적용 */}
        <LenisProvider>
          {/* 상단 고정 네비게이션 */}
          <Header />
          {/* 메인 콘텐츠 영역 */}
          <main>{children}</main>
          {/* 하단 푸터 */}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
