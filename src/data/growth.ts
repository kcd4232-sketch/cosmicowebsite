import type {
  GrowthQuestion,
  GrowthRecommendation,
  GrowthResult,
  GrowthTrackScores,
  CourseTrack,
  GrowthTone,
  GrowthIntent,
} from '@/types';

// ===== 7개 질문 =====
// 단일 과정 구조 → 레벨 분기 없음. 활동 지역 추가.
export const growthQuestions: GrowthQuestion[] = [
  {
    id: 'g1',
    step: 1,
    question: '현재 어떤 분야에서 활동하고 계신가요?',
    options: [
      { id: 'g1-hair', label: '미용실 / 헤어샵', trackScores: { bbtt: 1, headspa: 3, plasma: 0, instructor: 0 } },
      { id: 'g1-scalp', label: '두피 / 헤드스파', trackScores: { bbtt: 0, headspa: 3, plasma: 1, instructor: 0 } },
      { id: 'g1-skin', label: '피부 / 에스테틱', trackScores: { bbtt: 1, headspa: 1, plasma: 3, instructor: 0 } },
      { id: 'g1-body', label: '바디관리 / 체형관리', trackScores: { bbtt: 3, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g1-interest', label: '관심만 있어요', trackScores: { bbtt: 1, headspa: 1, plasma: 1, instructor: 0 } },
      { id: 'g1-other', label: '기타', trackScores: { bbtt: 1, headspa: 1, plasma: 1, instructor: 0 } },
    ],
  },
  {
    id: 'g2',
    step: 2,
    question: '현재 활동하시는 지역은 어디인가요?',
    helperText: '지역에 맞춰 교육 일정과 방문 안내를 도와드립니다.',
    options: [
      { id: 'g2-seoul', label: '서울 · 경기 · 인천 (수도권)', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g2-chungcheong', label: '강원 · 충청권', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g2-jeolla', label: '전라 · 제주권', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g2-gyeongsang', label: '경상권', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g2-overseas', label: '해외', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g2-other', label: '기타', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
    ],
  },
  {
    id: 'g3',
    step: 3,
    question: '가장 관심 있는 교육 분야는 무엇인가요?',
    helperText: '가장 배우고 싶은 기술 또는 트랙을 선택해주세요.',
    options: [
      { id: 'g3-bbtt', label: 'BBTT (바디밸런스 테크니컬 트레이닝)', trackScores: { bbtt: 4, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g3-headspa', label: '헤드스파 / 두피관리', trackScores: { bbtt: 0, headspa: 4, plasma: 0, instructor: 0 } },
      { id: 'g3-plasma', label: '플라즈마 피부관리', trackScores: { bbtt: 0, headspa: 0, plasma: 4, instructor: 0 } },
      { id: 'g3-instructor', label: '강사 / 마스터 양성', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 4 } },
      { id: 'g3-unknown', label: '잘 모르겠어요', trackScores: { bbtt: 1, headspa: 1, plasma: 1, instructor: 0 } },
    ],
  },
  {
    id: 'g4',
    step: 4,
    question: '교육을 통해 이루고 싶은 가장 큰 목표는 무엇인가요?',
    options: [
      {
        id: 'g4-teach',
        label: '강의를 직접 하고 싶어요',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 3 },
        toneHint: 'instructor',
      },
      {
        id: 'g4-differentiate',
        label: '경쟁자와 차별화된 전문 분야 구축',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
      },
      {
        id: 'g4-certificate',
        label: '자격증 / 수료증 취득',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
        toneHint: 'credential',
      },
      {
        id: 'g4-skill',
        label: '새로운 기술 / 메뉴 도입',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'practical',
      },
      {
        id: 'g4-revenue',
        label: '재방문율 및 객단가 향상',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'business',
      },
    ],
  },
  {
    id: 'g5',
    step: 5,
    question: '현재 경력은 어느 정도인가요?',
    options: [
      { id: 'g5-new', label: '입문 (관련 경력 없음)', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g5-1y', label: '1년 미만', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g5-3y', label: '1~3년', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g5-5y', label: '3~5년', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g5-senior', label: '5년 이상', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 } },
      {
        id: 'g5-teacher',
        label: '이미 강의 경험 있음',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 2 },
      },
    ],
  },
  {
    id: 'g6',
    step: 6,
    question: '교육에서 가장 중요하게 생각하는 가치는 무엇인가요?',
    options: [
      {
        id: 'g6-practical',
        label: '현장에서 즉시 적용 가능한 실전 기술',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'practical',
      },
      {
        id: 'g6-expand',
        label: '강사로 확장 / 교육 사업 진출',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 2 },
        toneHint: 'instructor',
      },
      {
        id: 'g6-credential',
        label: '체계적 커리큘럼과 전문성 인증',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
        toneHint: 'credential',
      },
      {
        id: 'g6-business',
        label: '메뉴화 / 창업 / 매출 연결',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'business',
      },
      {
        id: 'g6-consult',
        label: '고객 상담 능력 향상',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'consultation',
      },
    ],
  },
  {
    id: 'g7',
    step: 7,
    question: '교육 참여 의향이 어느 정도인가요?',
    options: [
      { id: 'g7-enroll', label: '바로 등록하고 싶어요', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, intent: 'enroll' },
      { id: 'g7-inquiry', label: '일정과 비용을 먼저 확인하고 싶어요', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, intent: 'inquiry' },
      { id: 'g7-browse', label: '탐색 중이에요 (상담만 원해요)', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, intent: 'browse' },
      {
        id: 'g7-instructor',
        label: '강사 가능 여부를 확인하고 싶어요',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        intent: 'instructor-path',
      },
    ],
  },
];

// ===== 추천 과정 5종 (단일 과정 구조, 전부 "현장 즉시 적용" 강조) =====
export const growthRecommendations: Record<string, GrowthRecommendation> = {
  COURSE_BBTT: {
    id: 'COURSE_BBTT',
    track: 'bbtt',
    title: 'BBTT 바디밸런스 테크닉 과정',
    subtitle: 'Body Balance Technical Training',
    description:
      '배운 그날 바로 매장에 적용 가능한 BBTT 실전 과정. 근막·체형 진단부터 핸들링 기술, 메뉴 도입, 고객 상담 스크립트까지 현장에서 즉시 써먹을 수 있는 기술 중심으로 진행합니다.',
    programs: [
      '근막·체형 진단 실전 (현장 적용 1일차부터)',
      'BBTT 핸들링 기술 (반복 실습)',
      '매장 메뉴 즉시 도입 가이드',
      '고객 상담·홈케어 스크립트 (현장 그대로 사용)',
      '수료 인증 발급',
    ],
    openingByTone: {
      practical: '배운 그날부터 매장에 바로 적용할 수 있는 BBTT 실전 과정입니다.',
      credential: '현장 즉시 적용 + 공인 수료증으로 BBTT 전문가 타이틀을 동시에 얻으세요.',
      business: '현장에서 바로 매출로 이어지는 BBTT 메뉴화·객단가 향상 전략까지 포함됩니다.',
      instructor: '현장 적용은 물론, 추후 강사로 확장까지 이어지는 BBTT 정통 과정입니다.',
      consultation: '현장 상담에서 바로 쓰는 BBTT 진단·설명법까지 함께 익힙니다.',
    },
  },
  COURSE_HEADSPA: {
    id: 'COURSE_HEADSPA',
    track: 'headspa',
    title: '헤드스파 / 두피관리 과정',
    subtitle: 'Head Spa & Scalp Care',
    description:
      '미용실·두피샵에 배운 즉시 도입 가능한 헤드스파 실전 과정. 두피 진단·핵심 테크닉·메뉴화·고객 상담까지 현장에서 바로 써먹는 기술 중심으로 진행합니다.',
    programs: [
      '두피 타입·증상 진단 실전',
      '헤드스파 핵심 테크닉 (반복 실습)',
      '매장 메뉴 즉시 도입 가이드',
      '고객 상담·홈케어 추천 스크립트',
      '수료 인증 발급',
    ],
    openingByTone: {
      practical: '배운 그날 바로 매장에 적용할 수 있는 헤드스파 실전 과정입니다.',
      credential: '현장 즉시 적용 + 공인 수료증으로 헤드스파 전문성을 동시에 확보하세요.',
      business: '현장에서 바로 매출과 재방문율을 끌어올리는 헤드스파 메뉴화 전략까지 포함됩니다.',
      instructor: '현장 적용은 물론, 강사 확장까지 이어지는 헤드스파 정통 과정입니다.',
      consultation: '두피 타입별 고객 상담·홈케어 제안법을 현장 그대로 익힙니다.',
    },
  },
  COURSE_PLASMA: {
    id: 'COURSE_PLASMA',
    track: 'plasma',
    title: '플라즈마 피부관리 과정',
    subtitle: 'Plasma Skin Care',
    description:
      '플라즈마 기기 운용·증상별 케어 프로토콜·메뉴화까지 현장 즉시 적용 가능한 실전 과정. 안전 교육과 함께 배운 즉시 매장 적용이 가능한 기술 중심으로 진행합니다.',
    programs: [
      '플라즈마 원리·안전 교육 (현장 적용 필수)',
      '증상별 케어 프로토콜 (여드름·색소·주름)',
      '매장 메뉴 즉시 도입 가이드',
      '고객 상담 스크립트 (현장 그대로 사용)',
      '수료 인증 발급',
    ],
    openingByTone: {
      practical: '배운 그날 바로 매장에 적용할 수 있는 플라즈마 실전 과정입니다.',
      credential: '현장 즉시 적용 + 공인 수료증으로 플라즈마 전문성을 동시에 확보하세요.',
      business: '현장에서 바로 고단가 메뉴로 연결되는 플라즈마 도입 전략까지 포함됩니다.',
      instructor: '현장 적용은 물론, 강사 확장까지 이어지는 플라즈마 정통 과정입니다.',
      consultation: '피부 고민별 고객 상담법을 현장 그대로 익힙니다.',
    },
  },
  COURSE_INSTRUCTOR: {
    id: 'COURSE_INSTRUCTOR',
    track: 'instructor',
    title: '강사 양성 트랙',
    subtitle: 'Instructor Development Program',
    description:
      '강의 설계·실습 지도·교안 제작·모의 강의까지 수료 즉시 강단에 설 수 있는 실전 강사 양성 과정. 강의 현장에서 바로 써먹을 수 있는 티칭 스킬을 반복 훈련합니다.',
    programs: [
      '강의 설계 & 프레젠테이션 실전',
      '실습 지도 방법론 (현장 그대로)',
      '교안·매뉴얼 제작 (즉시 활용)',
      '모의 강의 & 피드백 (반복 훈련)',
      '강사 자격 인증',
    ],
    openingByTone: {
      practical: '수료 즉시 강단에 설 수 있는 실전 강사 양성 과정입니다.',
      credential: '강사 인증 취득으로 공인 교육자 타이틀을 확보하세요.',
      business: '강의·세미나 운영으로 수익 채널을 다각화하는 전략까지 포함됩니다.',
      instructor: '드디어 강사 커리어의 첫걸음, 현장 강의에 바로 투입될 수 있는 역량을 완성합니다.',
      consultation: '수강생 상담·코칭까지 아우르는 전문 교육자로 성장합니다.',
    },
  },
  COURSE_CONSULTATION: {
    id: 'COURSE_CONSULTATION',
    track: 'undecided',
    title: '1:1 교육 상담',
    subtitle: 'Personalized Course Consultation',
    description:
      '어떤 과정이 나에게 맞을지 아직 확신이 서지 않는다면, 원장님과 1:1 상담을 통해 현장 즉시 적용 가능한 맞춤 트랙을 함께 설계해드립니다.',
    programs: [
      '현재 경력·활동 지역 심층 인터뷰',
      '맞춤 교육 트랙 추천 (현장 적용 기준)',
      '일정·비용 안내',
      '샘플 커리큘럼 미리 보기',
    ],
    openingByTone: {
      practical: '현장에 바로 적용 가능한 맞춤 과정을 상담으로 함께 찾아드립니다.',
      credential: '어떤 자격증·수료증이 현장에 가장 도움이 될지 상담으로 안내드립니다.',
      business: '사업 목표에 맞는 현장 즉시 적용 과정을 함께 설계해드립니다.',
      instructor: '강사를 목표로 하신다면, 현장 강의까지 이어지는 로드맵을 함께 그립니다.',
      consultation: '편하게 말씀해주세요. 현장 적용 중심의 맞춤 방향을 함께 찾아드립니다.',
    },
  },
};

// ===== 트랙 → 코스 ID 매핑 (단일 과정 구조) =====
const TRACK_COURSE_MAP: Record<CourseTrack, string> = {
  bbtt: 'COURSE_BBTT',
  headspa: 'COURSE_HEADSPA',
  plasma: 'COURSE_PLASMA',
  instructor: 'COURSE_INSTRUCTOR',
  undecided: 'COURSE_CONSULTATION',
};

// ===== 결과 계산 함수 =====
export function calculateGrowthResult(selectedAnswers: Record<string, string>): GrowthResult {
  const totals: GrowthTrackScores = { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 };
  let toneHint: GrowthTone = 'practical';
  let intent: GrowthIntent = 'browse';
  let forceInstructor = false;
  let region = '';

  let resolvedToneG4: GrowthTone | null = null;
  let resolvedToneG6: GrowthTone | null = null;
  let g4IsTeach = false;
  let g6IsExpand = false;
  let g4IsCertificate = false;
  let g6IsCredential = false;
  let g4IsRevenue = false;
  let g6IsBusiness = false;
  let g6IsConsult = false;
  let g1IsUndecided = false;
  let g3IsUnknown = false;

  for (const question of growthQuestions) {
    const optionId = selectedAnswers[question.id];
    if (!optionId) continue;

    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;

    totals.bbtt += option.trackScores.bbtt;
    totals.headspa += option.trackScores.headspa;
    totals.plasma += option.trackScores.plasma;
    totals.instructor += option.trackScores.instructor;

    if (option.intent) {
      intent = option.intent;
      if (option.intent === 'instructor-path') {
        forceInstructor = true;
      }
    }

    // 활동 지역 라벨 캡처
    if (question.id === 'g2') {
      region = option.label;
    }

    if (question.id === 'g1') {
      if (optionId === 'g1-interest' || optionId === 'g1-other') {
        g1IsUndecided = true;
      }
    }
    if (question.id === 'g3') {
      if (optionId === 'g3-unknown') g3IsUnknown = true;
    }
    if (question.id === 'g4') {
      if (optionId === 'g4-teach') { g4IsTeach = true; resolvedToneG4 = 'instructor'; }
      else if (optionId === 'g4-certificate') { g4IsCertificate = true; resolvedToneG4 = 'credential'; }
      else if (optionId === 'g4-revenue') { g4IsRevenue = true; resolvedToneG4 = 'business'; }
      else if (optionId === 'g4-skill') resolvedToneG4 = 'practical';
    }
    if (question.id === 'g6') {
      if (optionId === 'g6-expand') { g6IsExpand = true; resolvedToneG6 = 'instructor'; }
      else if (optionId === 'g6-credential') { g6IsCredential = true; resolvedToneG6 = 'credential'; }
      else if (optionId === 'g6-business') { g6IsBusiness = true; resolvedToneG6 = 'business'; }
      else if (optionId === 'g6-consult') { g6IsConsult = true; resolvedToneG6 = 'consultation'; }
      else if (optionId === 'g6-practical') resolvedToneG6 = 'practical';
    }
  }

  // Tone 결정
  if (g4IsTeach || g6IsExpand) {
    toneHint = 'instructor';
  } else if (g4IsCertificate || g6IsCredential) {
    toneHint = 'credential';
  } else if (g4IsRevenue || g6IsBusiness) {
    toneHint = 'business';
  } else if (g6IsConsult) {
    toneHint = 'consultation';
  } else {
    toneHint = resolvedToneG4 || resolvedToneG6 || 'practical';
  }

  // 트랙 결정
  let track: CourseTrack;
  if (forceInstructor) {
    track = 'instructor';
  } else {
    const maxScore = Math.max(totals.bbtt, totals.headspa, totals.plasma, totals.instructor);

    // 미정 fallback: 분야·관심 모두 모름 + 점수 낮을 때
    if (g3IsUnknown && g1IsUndecided && maxScore < 6) {
      track = 'undecided';
    } else {
      // argmax (우선순위: instructor > bbtt > headspa > plasma)
      if (totals.instructor === maxScore && maxScore > 0) track = 'instructor';
      else if (totals.bbtt === maxScore) track = 'bbtt';
      else if (totals.headspa === maxScore) track = 'headspa';
      else if (totals.plasma === maxScore) track = 'plasma';
      else track = 'undecided';
    }
  }

  const courseId = TRACK_COURSE_MAP[track];

  return { track, tone: toneHint, intent, region, totals, courseId };
}
