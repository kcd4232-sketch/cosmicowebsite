import type { DiagnosisQuestion, DiagnosisResult, ZoneRecommendation } from '@/types';

// ===== 바디존 질문 (4문항, BBTT 채점) =====
export const bodyQuestions: DiagnosisQuestion[] = [
  {
    id: 'b1',
    step: 1,
    zone: 'body',
    question: '목/어깨/허리 중 가장 불편한 부위는 어디인가요?',
    options: [
      { id: 'b1-a', label: '목 (뻐근함, 돌리기 힘듦)', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b1-b', label: '어깨 (결림, 뭉침)', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b1-c', label: '허리 (통증, 자세 불균형)', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b1-d', label: '특별히 불편한 곳 없어요', scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 } },
    ],
  },
  {
    id: 'b2',
    step: 2,
    zone: 'body',
    question: '몸의 불편함이 얼마나 지속되었나요?',
    options: [
      { id: 'b2-a', label: '최근 갑자기 생겼어요', scores: { bbtt: 1, headspa: 0, plasma: 0, comprehensive: 0 } },
      { id: 'b2-b', label: '3개월 이상 됐어요', scores: { bbtt: 2, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b2-c', label: '1년 이상 됐어요', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b2-d', label: '만성적인 문제예요 (수년째)', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 2 } },
    ],
  },
  {
    id: 'b3',
    step: 3,
    zone: 'body',
    question: '평소 자세나 생활 습관은 어떤가요?',
    options: [
      { id: 'b3-a', label: '하루 대부분 앉아서 일해요 (데스크워크)', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b3-b', label: '오래 서 있는 시간이 많아요', scores: { bbtt: 2, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b3-c', label: '육체적 노동이 많아요', scores: { bbtt: 2, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b3-d', label: '규칙적으로 운동하고 있어요', scores: { bbtt: 1, headspa: 0, plasma: 0, comprehensive: 0 } },
    ],
  },
  {
    id: 'b4',
    step: 4,
    zone: 'body',
    question: '하루에 앉아있는 시간은 얼마나 되나요?',
    options: [
      { id: 'b4-a', label: '2시간 미만', scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 } },
      { id: 'b4-b', label: '2~4시간', scores: { bbtt: 1, headspa: 0, plasma: 0, comprehensive: 0 } },
      { id: 'b4-c', label: '4~8시간', scores: { bbtt: 2, headspa: 0, plasma: 0, comprehensive: 1 } },
      { id: 'b4-d', label: '8시간 이상', scores: { bbtt: 3, headspa: 0, plasma: 0, comprehensive: 2 } },
    ],
  },
];

// ===== 두피존 질문 (4문항, 헤드스파 채점) =====
export const scalpQuestions: DiagnosisQuestion[] = [
  {
    id: 's1',
    step: 5,
    zone: 'scalp',
    question: '두피/머리에서 가장 신경 쓰이는 증상은 무엇인가요?',
    options: [
      { id: 's1-a', label: '두피 가려움/비듬', scores: { bbtt: 0, headspa: 3, plasma: 0, comprehensive: 1 } },
      { id: 's1-b', label: '탈모/모발 가늘어짐', scores: { bbtt: 0, headspa: 3, plasma: 0, comprehensive: 1 } },
      { id: 's1-c', label: '두통/두피 긴장감', scores: { bbtt: 1, headspa: 2, plasma: 0, comprehensive: 1 } },
      { id: 's1-d', label: '특별한 증상 없어요', scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 } },
    ],
  },
  {
    id: 's2',
    step: 6,
    zone: 'scalp',
    question: '두피 불편함이 얼마나 지속되었나요?',
    options: [
      { id: 's2-a', label: '최근에 생겼어요', scores: { bbtt: 0, headspa: 1, plasma: 0, comprehensive: 0 } },
      { id: 's2-b', label: '3개월 이상 됐어요', scores: { bbtt: 0, headspa: 2, plasma: 0, comprehensive: 1 } },
      { id: 's2-c', label: '1년 이상 됐어요', scores: { bbtt: 0, headspa: 3, plasma: 0, comprehensive: 1 } },
      { id: 's2-d', label: '두피 불편함은 없어요', scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 } },
    ],
  },
  {
    id: 's3',
    step: 7,
    zone: 'scalp',
    question: '현재 스트레스 수준은 어느 정도인가요?',
    options: [
      { id: 's3-a', label: '낮음 (여유롭고 편안해요)', scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 } },
      { id: 's3-b', label: '보통 (일상적인 수준이에요)', scores: { bbtt: 0, headspa: 1, plasma: 0, comprehensive: 1 } },
      { id: 's3-c', label: '높음 (자주 스트레스를 받아요)', scores: { bbtt: 0, headspa: 2, plasma: 0, comprehensive: 2 } },
      { id: 's3-d', label: '매우 높음 (번아웃 직전이에요)', scores: { bbtt: 0, headspa: 3, plasma: 0, comprehensive: 3 } },
    ],
  },
  {
    id: 's4',
    step: 8,
    zone: 'scalp',
    question: '두피/모발 전문 관리를 받아본 경험이 있나요?',
    options: [
      { id: 's4-a', label: '없어요 (처음이에요)', scores: { bbtt: 0, headspa: 1, plasma: 0, comprehensive: 0 } },
      { id: 's4-b', label: '가끔 받아봤어요', scores: { bbtt: 0, headspa: 2, plasma: 0, comprehensive: 1 } },
      { id: 's4-c', label: '정기적으로 받고 있어요', scores: { bbtt: 0, headspa: 2, plasma: 0, comprehensive: 1 } },
      { id: 's4-d', label: '받아봤지만 효과가 없었어요', scores: { bbtt: 0, headspa: 3, plasma: 0, comprehensive: 2 } },
    ],
  },
];

// 전체 질문 (하위 호환성)
export const diagnosisQuestions: DiagnosisQuestion[] = [...bodyQuestions, ...scalpQuestions];

// ===== 레벨별 추천 데이터 =====
export const bodyRecommendations: Record<string, ZoneRecommendation> = {
  low: {
    level: 'low',
    title: '근막 긴장 경증 — 예방적 관리 단계',
    description: '현재 근·골격계 상태는 비교적 안정적이나, 경미한 근막 긴장의 초기 신호가 감지됩니다. 지속적인 데스크워크나 반복 동작이 누적되면 자세 불균형으로 이어질 수 있으므로, 예방적 BBTT 케어를 통해 지금의 컨디션을 유지하는 것을 권장합니다.',
    programs: [
      'BBTT 기초 근막 이완 케어',
      '전신 자세·체형 기초 분석',
      '일상 스트레칭 루틴 처방',
    ],
  },
  medium: {
    level: 'medium',
    title: '근막·근육 긴장 중등도 — BBTT 기본 프로그램 권장',
    description: '목·어깨·허리의 근막 긴장이 중등도로 진행되고 있으며, 자세 불균형과 체형 비대칭의 초기 패턴이 관찰됩니다. 방치 시 만성 통증 및 근육 단축으로 악화될 수 있으므로, BBTT 테크닉을 통한 체계적 이완과 균형 회복이 필요한 시점입니다.',
    programs: [
      '전신 바디밸런스 정밀 분석',
      'BBTT 흉쇄유돌근·승모근 이완 프로토콜',
      '자세 교정 및 체형 균형 케어',
      '홈케어 스트레칭 처방',
    ],
  },
  high: {
    level: 'high',
    title: '근막·골격 불균형 고도 — BBTT 집중 관리 필요',
    description: '만성적 근막 긴장과 골격 불균형이 복합적으로 진행된 상태입니다. 근육 단축, 관절 가동 범위 제한, 자세 비대칭이 심화되어 있을 가능성이 높으며, 조기 집중 관리를 통한 근본적 개선이 시급합니다. BBTT 집중 프로토콜과 정기 관리를 병행할 것을 권장합니다.',
    programs: [
      '심층 바디 불균형 정밀 진단',
      'BBTT 집중 케어 (주 1~2회)',
      '전신 자세 교정 및 비대칭 개선 프로그램',
      '만성 긴장 부위 집중 이완 테크닉',
      '정기 관리 스케줄 설계',
    ],
  },
};

export const scalpRecommendations: Record<string, ZoneRecommendation> = {
  low: {
    level: 'low',
    title: '두피 기저 상태 양호 — 예방적 두피 케어 단계',
    description: '현재 두피 및 모발 상태는 안정적입니다. 스트레스·계절 변화 등 외부 요인으로 인한 두피 환경 변화에 대비하여 정기적인 예방 케어로 건강한 두피 상태를 유지하는 것을 권장합니다.',
    programs: [
      '두피 타입별 기초 케어 안내',
      '두피 자가 림프 마사지 가이드',
      '두피 환경 유지 관리 체크업',
    ],
  },
  medium: {
    level: 'medium',
    title: '두피 미세염증·순환 저하 진행 — 헤드스파 기본 프로그램 권장',
    description: '두피 피지 분비 불균형, 림프 순환 저하, 또는 스트레스성 두피 긴장의 중등도 징후가 나타나고 있습니다. 방치 시 두피 트러블 심화 및 모발 손상으로 이어질 수 있으므로, 헤드스파 기본 프로그램을 통한 두피 환경 개선이 필요한 시점입니다.',
    programs: [
      '두피 상태 정밀 진단',
      'GBTT 두피 림프 해독 케어',
      '모근 강화 영양 공급 프로그램',
      '두피 긴장 해소 스트레스 케어',
    ],
  },
  high: {
    level: 'high',
    title: '두피 기능 저하 고도 — 헤드스파 집중 케어 필요',
    description: '두피 만성 염증, 모낭 약화, 또는 지속적인 탈모 신호 등 두피 기능 저하가 상당히 진행된 상태로 판단됩니다. 즉각적인 집중 케어와 함께 두피 환경의 근본적 개선을 위한 정기 관리 플랜 수립이 필요합니다.',
    programs: [
      '두피 정밀 분석 및 맞춤 케어 플랜 수립',
      'GBTT 집중 림프 해독 헤드스파 (주 1~2회)',
      '모낭 강화 및 탈모 예방 특별 프로그램',
      '두피·모발 집중 영양 케어',
      '정기 두피 관리 스케줄 설계',
    ],
  },
};

// ===== 기존 결과 데이터 (하위 호환성 유지) =====
export const diagnosisResults: Record<string, DiagnosisResult> = {
  bbtt: {
    type: 'bbtt',
    title: 'BBTT 바디밸런스 관리',
    subtitle: 'Body Balance Technical Training',
    description:
      '목, 어깨, 자세 불균형이 주요 문제입니다. BBTT(Body Balance Technical Training) 관리를 통해 근육의 긴장을 해소하고 체형 균형을 회복할 수 있습니다.',
    recommendations: [
      '전신 바디 밸런스 분석 및 맞춤 케어',
      '목·어깨 근육 이완 전문 테크닉',
      '자세 교정 및 비대칭 개선 프로그램',
      '정기적인 BBTT 관리 루틴 설계',
    ],
    color: '#0A1628',
    scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 },
  },
  headspa: {
    type: 'headspa',
    title: '헤드스파 두피 관리',
    subtitle: 'Head Spa Scalp Care',
    description:
      '두피 건강과 스트레스 해소가 필요한 상태입니다. 전문 헤드스파 관리로 두피의 혈액순환을 촉진하고, 탈모 예방과 깊은 이완을 경험해보세요.',
    recommendations: [
      '두피 상태 정밀 진단 및 맞춤 케어',
      '림프 해독 헤드스파 테크닉',
      '모근 강화 및 탈모 예방 프로그램',
      '스트레스 해소 두피 마사지',
    ],
    color: '#1a3a5c',
    scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 },
  },
  plasma: {
    type: 'plasma',
    title: '플라즈마 피부 관리',
    subtitle: 'Plasma Skin Care',
    description:
      '피부 트러블과 피부 결 개선이 필요한 상태입니다. 플라즈마 관리는 피부 재생을 촉진하고 색소침착, 주름, 여드름 흉터 등에 효과적입니다.',
    recommendations: [
      '피부 상태 정밀 분석 및 맞춤 케어',
      '플라즈마 피부 재생 관리',
      '기미·색소침착 개선 프로그램',
      '피부 탄력 및 리프팅 케어',
    ],
    color: '#8b1a2e',
    scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 },
  },
  comprehensive: {
    type: 'comprehensive',
    title: '종합 웰니스 관리',
    subtitle: 'Comprehensive Wellness Care',
    description:
      '전신적인 피로와 복합적인 불편함이 있는 상태입니다. 다양한 케어를 복합적으로 적용하는 맞춤형 종합 관리 프로그램이 필요합니다.',
    recommendations: [
      '전신 상태 종합 진단 및 맞춤 플랜 수립',
      'BBTT + 헤드스파 복합 케어',
      '정기 관리 스케줄 설계',
      '라이프스타일 개선 상담',
    ],
    color: '#2d5a3d',
    scores: { bbtt: 0, headspa: 0, plasma: 0, comprehensive: 0 },
  },
};

// 점수 → 레벨 변환 함수 (0-4: low, 5-8: medium, 9-12: high)
export function getScoreLevel(score: number): 'low' | 'medium' | 'high' {
  if (score <= 4) return 'low';
  if (score <= 8) return 'medium';
  return 'high';
}
