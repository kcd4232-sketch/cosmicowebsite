'use client';

import { motion } from 'framer-motion';
import { growthRecommendations } from '@/data/growth';
import { aboutText } from '@/data/profile';
import type { GrowthResult } from '@/types';

interface GrowthResultCardProps {
  result: GrowthResult;
  onReset: () => void;
}

const intentCTA: Record<string, string> = {
  enroll: '지금 등록 상담하기',
  inquiry: '일정·비용 확인하기',
  browse: '부담 없이 상담받기',
  'instructor-path': '강사 트랙 문의하기',
};

const trackLabels: Record<string, string> = {
  bbtt: 'BBTT 바디밸런스',
  headspa: '헤드스파',
  plasma: '플라즈마',
  instructor: '강사 양성',
};

const trackColors: Record<string, string> = {
  bbtt: '#0A1628',
  headspa: '#1a5c8a',
  plasma: '#6b21a8',
  instructor: '#C41E3A',
};

const MAX_TRACK_SCORE = 10;

export default function GrowthResultCard({ result, onReset }: GrowthResultCardProps) {
  const course = growthRecommendations[result.courseId];
  if (!course) return null;

  const opening = course.openingByTone[result.tone];
  const ctaLabel = intentCTA[result.intent] || '상담 문의하기';

  const trackEntries = [
    { key: 'bbtt', label: trackLabels.bbtt, score: result.totals.bbtt, color: trackColors.bbtt },
    { key: 'headspa', label: trackLabels.headspa, score: result.totals.headspa, color: trackColors.headspa },
    { key: 'plasma', label: trackLabels.plasma, score: result.totals.plasma, color: trackColors.plasma },
    { key: 'instructor', label: trackLabels.instructor, score: result.totals.instructor, color: trackColors.instructor },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* 추천 코스 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4"
      >
        {/* 어조 맞춤 오프닝 */}
        <p className="text-[#C41E3A] text-sm font-medium mb-4 leading-relaxed">{opening}</p>

        <div className="h-px bg-white/10 mb-4" />

        {/* 코스 제목 */}
        <div className="mb-4">
          <span className="text-white/40 text-xs uppercase tracking-widest">추천 과정</span>
          <h2 className="text-white font-bold text-2xl mt-1">{course.title}</h2>
          <p className="text-white/50 text-sm mt-1">{course.subtitle}</p>
        </div>

        {/* 설명 */}
        <p className="text-white/70 text-sm leading-relaxed mb-5">{course.description}</p>

        {/* 커리큘럼 */}
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">커리큘럼</p>
          <ul className="space-y-2">
            {course.programs.map((prog, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-center gap-2 text-white/75 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#C41E3A]" />
                {prog}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* 트랙 점수 분석 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6"
      >
        <h3 className="text-white font-bold mb-5 text-center text-sm tracking-widest uppercase opacity-60">
          트랙 적합도 분석
        </h3>
        <div className="space-y-5">
          {trackEntries.map((t, i) => {
            const pct = Math.min(100, Math.round((t.score / MAX_TRACK_SCORE) * 100));
            return (
              <div key={t.key}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-white/70">{t.label}</span>
                  <span className="text-white font-bold">{t.score}점</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA 버튼 */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={aboutText.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors text-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          {ctaLabel}
        </a>
        <button
          onClick={onReset}
          className="flex-1 px-6 py-4 border border-white/20 text-white/70 font-medium rounded-full hover:border-white/40 hover:text-white transition-colors"
        >
          다시 하기
        </button>
      </div>
    </motion.div>
  );
}
