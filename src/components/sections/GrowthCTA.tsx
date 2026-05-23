'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function GrowthCTA() {
  return (
    <section className="section-padding bg-[#0A1628] relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1a5c8a]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1a5c8a]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            {/* 전문가 전용 pill */}
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/15 rounded-full text-white/60 text-xs font-medium mb-6">
              전문가 전용
            </div>

            {/* 아이콘 */}
            <div className="w-16 h-16 bg-[#1a5c8a]/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c8a" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>

            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              전문가를 위한 교육 진단
            </h2>

            <p className="text-white/60 text-lg mb-4 leading-relaxed">
              현장 경력과 관심 분야로<br className="md:hidden" />
              맞춤 교육 트랙을 추천드립니다.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['BBTT 바디', '헤드스파', '플라즈마', '강사 양성'].map((label) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <span className="text-white font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/professional-growth"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a5c8a] text-white font-bold rounded-full hover:bg-[#1e6fa3] transition-colors duration-200 text-lg shadow-lg shadow-blue-900/30"
            >
              전문가 성장 진단 시작
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <p className="text-white/30 text-sm mt-4">약 2분 소요 · 전문가 전용</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
