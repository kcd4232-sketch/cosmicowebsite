'use client';

import { motion } from 'framer-motion';
import type { GrowthQuestion } from '@/types';
import { cn } from '@/lib/utils';

interface GrowthQuestionCardProps {
  question: GrowthQuestion;
  selectedOptionId: string | undefined;
  onSelect: (optionId: string) => void;
}

export default function GrowthQuestionCard({ question, selectedOptionId, onSelect }: GrowthQuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-white text-xl md:text-2xl font-bold mb-3 text-center leading-relaxed">
        {question.question}
      </h2>
      {question.helperText && (
        <p className="text-white/40 text-sm text-center mb-6">{question.helperText}</p>
      )}
      {!question.helperText && <div className="mb-6" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                'w-full p-5 rounded-xl text-left transition-all duration-200 border-2',
                isSelected
                  ? 'border-[#C41E3A] bg-[#C41E3A]/15 text-white'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/10'
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  'w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors',
                  isSelected ? 'border-[#C41E3A]' : 'border-white/30'
                )}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#C41E3A]" />}
                </div>
                <span className="text-sm font-medium leading-relaxed">{option.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
