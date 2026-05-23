interface GrowthProgressBarProps {
  current: number;
  total: number;
}

export default function GrowthProgressBar({ current, total }: GrowthProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <p className="text-white/50 text-xs text-center mb-3">전문가 성장 진단</p>
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="text-white/60">
          질문 <span className="text-white font-bold">{current}</span> / {total}
        </span>
        <span className="text-[#C41E3A] font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#C41E3A] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
