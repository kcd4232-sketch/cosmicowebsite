/** @type {import('next').NextConfig} */
const nextConfig = {
  // next/image: 외부 도메인 이미지 허용 설정
  // 현재는 로컬 이미지만 사용하므로 최소 설정
  images: {
    // 나중에 인스타그램 API 등 외부 이미지 사용 시 도메인 추가
    remotePatterns: [],
  },

  // 고객 자가진단은 메인 노출에서 제외 → 기존 링크는 전문가 성장진단으로 이동
  // (페이지 코드는 src/app/self-diagnosis 에 보존. 되살리려면 이 redirect만 지우면 됨)
  async redirects() {
    return [
      { source: '/self-diagnosis', destination: '/professional-growth', permanent: false },
    ];
  },

  // 실험적 기능: 더 빠른 컴파일러 (Rust 기반)
  experimental: {
    // optimizeCss: true, // CSS 최적화 (필요시 활성화)
  },
};

export default nextConfig;
