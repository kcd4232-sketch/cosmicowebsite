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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "EducationalOrganization"],
                "@id": "https://www.headspabbtt.com/#organization",
                "name": "윤소연 COSMICO KOREA",
                "alternateName": ["BBTT 헤드스파 교육원", "아임뷰티", "Im Beauty"],
                "description": "헤드스파, 두피관리, 림프마사지, BBTT(Body Balance Technical Training) 전문가 양성 교육. 국제대회 수상 강사 직강. 두피관리사 자격증, 헤드스파 강사 양성 정규 과정 운영. 100% 예약제로 운영됩니다.",
                "url": "https://www.headspabbtt.com",
                "logo": "https://www.headspabbtt.com/images/profile/profile-1.png",
                "image": [
                  "https://www.headspabbtt.com/images/profile/profile-1.png",
                  "https://www.headspabbtt.com/images/profile/profile-2.png"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "달성군 옥포읍 돌미로2서길 6, 3층 302호",
                  "addressLocality": "대구광역시",
                  "addressRegion": "대구",
                  "postalCode": "43004",
                  "addressCountry": "KR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.7833,
                  "longitude": 128.4833
                },
                "areaServed": [
                  { "@type": "City", "name": "대구광역시" },
                  { "@type": "AdministrativeArea", "name": "경상북도" },
                  { "@type": "Country", "name": "대한민국" }
                ],
                "sameAs": [
                  "https://www.instagram.com/imbeauty_pro"
                ],
                "priceRange": "₩₩",
                "knowsAbout": [
                  "헤드스파",
                  "두피관리",
                  "림프마사지",
                  "BBTT",
                  "바디밸런스 테크니컬 트레이닝",
                  "Body Balance Technical Training",
                  "두피관리사 자격증",
                  "헤드스파 강사 양성",
                  "에스테틱 교육",
                  "피부관리사 스킬업",
                  "플라즈마",
                  "근막이완"
                ],
                "founder": {
                  "@type": "Person",
                  "@id": "https://www.headspabbtt.com/#founder"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.headspabbtt.com/#founder",
                "name": "윤소연",
                "alternateName": "Yun Soyeon",
                "jobTitle": "헤드스파·BBTT 전문 강사 / 마사지 테라피스트",
                "description": "COSMICO KOREA 소속 마사지 테라피스트이자 강사. BBTT, 헤드스파, 플라즈마 전문. 국제대회 수상 경력 및 베트남·스리랑카·몽골 국제 강의 경력 보유.",
                "image": "https://www.headspabbtt.com/images/profile/profile-1.png",
                "url": "https://www.headspabbtt.com",
                "worksFor": {
                  "@type": "Organization",
                  "name": "COSMICO KOREA"
                },
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "코즈미코 BBTT 기술교육강사",
                    "credentialCategory": "Professional Certification"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "헤드스파 국제종합미용강사",
                    "credentialCategory": "Professional Certification"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "피부미용 국가자격증",
                    "credentialCategory": "National Certification"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "미용사 종합면허증",
                    "credentialCategory": "License"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "뷰티플라즈마 마스터 자격증",
                    "credentialCategory": "Professional Certification"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "플라즈마 교육지사",
                    "credentialCategory": "Director"
                  }
                ],
                "award": [
                  "2023 국제바디아트콘테스트 플라즈마 부문 골드그랑프리",
                  "2024 K뷰티월드콘테스트엑스포 플라즈마 심사위원",
                  "2025 한국휴먼올림픽국제뷰티대회 헤드스파 부문 대상"
                ],
                "sameAs": [
                  "https://www.instagram.com/imbeauty_pro"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.headspabbtt.com/#website",
                "url": "https://www.headspabbtt.com",
                "name": "윤소연 COSMICO KOREA",
                "description": "헤드스파·BBTT·두피관리 전문가 양성 교육 사이트",
                "inLanguage": "ko-KR",
                "publisher": {
                  "@id": "https://www.headspabbtt.com/#organization"
                }
              }
            ])
          }}
        />
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
