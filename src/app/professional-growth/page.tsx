import type { Metadata } from 'next';
import Link from 'next/link';
import GrowthQuizContainer from '@/components/growth/GrowthQuizContainer';

export const metadata: Metadata = {
  title: '전문가 성장 진단',
  description: '7가지 질문으로 미용·두피·에스테틱 전문가에게 맞는 교육 트랙을 찾아드립니다. BBTT · 헤드스파 · 플라즈마 · 강사 양성.',
};

export default function ProfessionalGrowthPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <div className="pt-28 pb-10 px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          메인으로 돌아가기
        </Link>

        <h1 className="text-white text-4xl font-bold mb-3">나에게 맞는 전문가 교육은?</h1>
        <p className="text-white/50 text-lg">
          7가지 질문으로 BBTT · 헤드스파 · 플라즈마 · 강사 트랙 중 맞춤 추천을 받아보세요.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {['BBTT 바디', '헤드스파', '플라즈마', '강사 양성'].map((type) => (
            <span
              key={type}
              className="px-3 py-1 border border-white/15 text-white/50 text-sm rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="container-custom pb-20 px-4">
        <GrowthQuizContainer />
      </div>
    </div>
  );
}
