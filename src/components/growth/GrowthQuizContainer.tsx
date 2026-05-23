'use client';

import { AnimatePresence } from 'framer-motion';
import { useGrowthStore } from '@/store/growthStore';
import { growthQuestions } from '@/data/growth';
import GrowthProgressBar from './GrowthProgressBar';
import GrowthQuestionCard from './GrowthQuestionCard';
import GrowthResultCard from './GrowthResultCard';
import CustomerInfoForm from '@/components/diagnosis/CustomerInfoForm';

const TOTAL_STEPS = growthQuestions.length;

export default function GrowthQuizContainer() {
  const {
    phase,
    currentStep,
    selectedAnswers,
    result,
    isSubmitting,
    selectAnswer,
    nextStep,
    prevStep,
    submitCustomerInfo,
    reset,
  } = useGrowthStore();

  if (phase === 'results' && result) {
    return (
      <div className="py-8">
        <GrowthResultCard result={result} onReset={reset} />
      </div>
    );
  }

  if (phase === 'customer-info') {
    return (
      <div className="py-8">
        <CustomerInfoForm
          onSubmit={submitCustomerInfo}
          onBack={prevStep}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }

  const currentQuestion = growthQuestions[currentStep - 1];
  const currentAnswer = selectedAnswers[currentQuestion?.id];
  const isLastStep = currentStep === TOTAL_STEPS;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10">
        <GrowthProgressBar current={currentStep} total={TOTAL_STEPS} />
      </div>

      <AnimatePresence mode="wait">
        <GrowthQuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          selectedOptionId={currentAnswer}
          onSelect={(optionId) => selectAnswer(currentQuestion.id, optionId)}
        />
      </AnimatePresence>

      <div className="flex justify-between mt-10 gap-4">
        {currentStep > 1 ? (
          <button
            onClick={prevStep}
            className="px-6 py-3 border border-white/20 text-white/70 rounded-full hover:border-white/40 hover:text-white transition-colors"
          >
            ← 이전
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={nextStep}
          disabled={!currentAnswer}
          className="px-8 py-3 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {isLastStep ? '정보 입력 →' : '다음 →'}
        </button>
      </div>
    </div>
  );
}
