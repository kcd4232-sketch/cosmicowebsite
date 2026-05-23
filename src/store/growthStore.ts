import { create } from 'zustand';
import type { CustomerInfo, GrowthResult } from '@/types';
import { growthQuestions, calculateGrowthResult } from '@/data/growth';

export type GrowthPhase = 'quiz' | 'customer-info' | 'results';

const TOTAL_STEPS = growthQuestions.length; // 7

interface GrowthStoreState {
  phase: GrowthPhase;
  currentStep: number;
  selectedAnswers: Record<string, string>;
  result: GrowthResult | null;
  customerInfo: CustomerInfo | null;
  isSubmitting: boolean;

  selectAnswer(questionId: string, optionId: string): void;
  nextStep(): void;
  prevStep(): void;
  calculateResult(): void;
  submitCustomerInfo(info: CustomerInfo): Promise<void>;
  reset(): void;
}

export const useGrowthStore = create<GrowthStoreState>((set, get) => ({
  phase: 'quiz',
  currentStep: 1,
  selectedAnswers: {},
  result: null,
  customerInfo: null,
  isSubmitting: false,

  selectAnswer: (questionId, optionId) => {
    set((s) => ({ selectedAnswers: { ...s.selectedAnswers, [questionId]: optionId } }));
  },

  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < TOTAL_STEPS) {
      set({ currentStep: currentStep + 1 });
    } else {
      get().calculateResult();
      set({ phase: 'customer-info' });
    }
  },

  prevStep: () => {
    const { phase, currentStep } = get();
    if (phase === 'customer-info') {
      set({ phase: 'quiz', currentStep: TOTAL_STEPS });
    } else if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },

  calculateResult: () => {
    const result = calculateGrowthResult(get().selectedAnswers);
    set({ result });
  },

  submitCustomerInfo: async (info: CustomerInfo) => {
    set({ isSubmitting: true, customerInfo: info });
    const { result, selectedAnswers } = get();
    if (!result) {
      set({ isSubmitting: false, phase: 'results' });
      return;
    }

    const getLabel = (questionId: string) => {
      const optionId = selectedAnswers[questionId];
      const q = growthQuestions.find((q) => q.id === questionId);
      return q?.options.find((o) => o.id === optionId)?.label || '';
    };

    const { growthRecommendations } = await import('@/data/growth');
    const course = growthRecommendations[result.courseId];

    try {
      await fetch('/api/growth-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: info.name,
          phone: info.phone,
          field: getLabel('g1'),
          interest: getLabel('g2'),
          goal: getLabel('g3'),
          experience: getLabel('g4'),
          priority: getLabel('g5'),
          format: getLabel('g6'),
          intentLabel: getLabel('g7'),
          intent: result.intent,
          track: result.track,
          tone: result.tone,
          courseId: result.courseId,
          courseTitle: course?.title || '',
          courseSubtitle: course?.subtitle || '',
          courseDescription: course?.description || '',
          coursePrograms: course?.programs || [],
          totals: result.totals,
        }),
      });
    } catch {
      // 이메일 실패해도 결과 표시 차단하지 않음
    } finally {
      set({ isSubmitting: false, phase: 'results' });
    }
  },

  reset: () => {
    set({
      phase: 'quiz',
      currentStep: 1,
      selectedAnswers: {},
      result: null,
      customerInfo: null,
      isSubmitting: false,
    });
  },
}));
