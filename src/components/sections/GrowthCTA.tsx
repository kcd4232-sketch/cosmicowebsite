'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function GrowthCTA() {
  return (
    <section className="section-padding bg-[#0A1628] relative overflow-hidden">
      {/* 성장진단 메인 강조 — 레드 글로우 */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#C41E3A]/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C41E3A]/8 rounded-full blur-3xl" />
      {/* 상단 구분선 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/50 to-transparent" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">

            {/* NEW + 전문가 전용 pill 행 */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-yellow-400 text-[#0A1628] text-xs font-extrabold px-2.5 py-1 rounded-full tracking-wide">
                NEW
              </span>
              <span className="inline-block px-3 py-1 bg-[#C41E3A]/20 border border-[#C41E3A]/40 rounded-full text-[#ff6b6b] text-xs font-semibold">
                전문가 전용 교육 진단
              </span>
            </div>

            {/* 아이콘 — 레드 강조 */}
            <div className="w-20 h-20 bg-[#C41E3A]/20 border border-[#C41E3A]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-900/30">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
              전문가 성장 진단
            </h2>
            <p className="text-white/50 text-base md:text-lg mb-2">
              나에게 맞는 교육 트랙을 7가지 질문으로 찾아드립니다
            </p>
            <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed font-medium">
              BBTT · 헤드스파 · 플라즈마 · 강사 양성<br className="md:hidden" />
              <span className="text-white/40 text-base font-normal"> — 경력과 목표에 맞는 과정 추천</span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { label: 'BBTT 바디', sub: '체형·근막' },
                { label: '헤드스파', sub: '두피관리' },
                { label: '플라즈마', sub: '피부케어' },
                { label: '강사 양성', sub: '마스터 과정' },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 border border-[#C41E3A]/20 px-4 py-2 rounded-full">
                  <span className="text-white font-semibold text-sm">{label}</span>
                  <span className="text-white/40 text-xs">{sub}</span>
                </div>
              ))}
            </div>

            {/* 메인 CTA 버튼 — 레드 그라디언트 */}
            <Link
              href="/professional-growth"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#C41E3A] to-[#e02446] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-red-900/50 hover:scale-105 transition-all duration-200 text-lg shadow-lg shadow-red-900/40"
            >
              전문가 성장 진단 시작하기
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <p className="text-white/30 text-sm mt-4">약 2분 소요 · 전문가 전용 · 무료 제공</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
