import type {
  GrowthQuestion,
  GrowthRecommendation,
  GrowthResult,
  GrowthTrackScores,
  CourseTrack,
  CourseLevel,
  GrowthTone,
  GrowthIntent,
} from '@/types';

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
    question: '가장 관심 있는 교육 분야는 무엇인가요?',
    helperText: '가장 배우고 싶은 기술 또는 트랙을 선택해주세요.',
    options: [
      { id: 'g2-bbtt', label: 'BBTT (바디밸런스 테크니컬 트레이닝)', trackScores: { bbtt: 4, headspa: 0, plasma: 0, instructor: 0 } },
      { id: 'g2-headspa', label: '헤드스파 / 두피관리', trackScores: { bbtt: 0, headspa: 4, plasma: 0, instructor: 0 } },
      { id: 'g2-plasma', label: '플라즈마 피부관리', trackScores: { bbtt: 0, headspa: 0, plasma: 4, instructor: 0 } },
      { id: 'g2-instructor', label: '강사 / 마스터 양성', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 4 } },
      { id: 'g2-unknown', label: '잘 모르겠어요', trackScores: { bbtt: 1, headspa: 1, plasma: 1, instructor: 0 } },
    ],
  },
  {
    id: 'g3',
    step: 3,
    question: '교육을 통해 이루고 싶은 가장 큰 목표는 무엇인가요?',
    options: [
      {
        id: 'g3-teach',
        label: '강의를 직접 하고 싶어요',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 3 },
        toneHint: 'instructor',
      },
      {
        id: 'g3-differentiate',
        label: '경쟁자와 차별화된 전문 분야 구축',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
      },
      {
        id: 'g3-certificate',
        label: '자격증 / 수료증 취득',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
        toneHint: 'credential',
      },
      {
        id: 'g3-skill',
        label: '새로운 기술 / 메뉴 도입',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'practical',
      },
      {
        id: 'g3-revenue',
        label: '재방문율 및 객단가 향상',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'business',
      },
    ],
  },
  {
    id: 'g4',
    step: 4,
    question: '현재 경력은 어느 정도인가요?',
    options: [
      { id: 'g4-new', label: '입문 (관련 경력 없음)', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, levelHint: 'intro' },
      { id: 'g4-1y', label: '1년 미만', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, levelHint: 'intro' },
      { id: 'g4-3y', label: '1~3년', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, levelHint: 'regular' },
      { id: 'g4-5y', label: '3~5년', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, levelHint: 'regular' },
      { id: 'g4-senior', label: '5년 이상', trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 }, levelHint: 'master' },
      {
        id: 'g4-teacher',
        label: '이미 강의 경험 있음',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 2 },
        levelHint: 'master',
      },
    ],
  },
  {
    id: 'g5',
    step: 5,
    question: '교육에서 가장 중요하게 생각하는 가치는 무엇인가요?',
    options: [
      {
        id: 'g5-expand',
        label: '강사로 확장 / 교육 사업 진출',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 2 },
        toneHint: 'instructor',
      },
      {
        id: 'g5-credential',
        label: '체계적 커리큘럼과 전문성 인증',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
        toneHint: 'credential',
      },
      {
        id: 'g5-practical',
        label: '즉시 적용 가능한 실전 기술',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'practical',
      },
      {
        id: 'g5-business',
        label: '메뉴화 / 창업 / 매출 연결',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'business',
      },
      {
        id: 'g5-consult',
        label: '고객 상담 능력 향상',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
        toneHint: 'consultation',
      },
    ],
  },
  {
    id: 'g6',
    step: 6,
    question: '선호하는 교육 형태는 무엇인가요?',
    options: [
      {
        id: 'g6-master',
        label: '강사 / 마스터 심화 과정',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 3 },
      },
      {
        id: 'g6-regular',
        label: '정규 과정 (체계적 커리큘럼)',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 1 },
      },
      {
        id: 'g6-workshop',
        label: '단기 워크샵 / 집중 실습',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
      },
      {
        id: 'g6-intro',
        label: '입문 / 기초 과정',
        trackScores: { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 },
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

export const growthRecommendations: Record<string, GrowthRecommendation> = {
  COURSE_BBTT_FOUNDATION: {
    id: 'COURSE_BBTT_FOUNDATION',
    track: 'bbtt',
    level: 'intro',
    title: 'BBTT 입문 과정',
    subtitle: 'Body Balance Technical Training — Foundation',
    description: '바디밸런스 기초부터 체계적으로 시작하는 입문 트랙. 근막·체형 진단의 원리를 이해하고 핵심 핸들링 기술을 습득합니다.',
    programs: ['바디밸런스 이론 기초', '근막 해부학 입문', 'BBTT 기본 핸들링 실습', '고객 상담 기초 스크립트'],
    openingByTone: {
      practical: '현장에서 바로 써먹을 수 있는 BBTT 기초를 빠르게 익혀보세요.',
      credential: '공인 과정으로 BBTT 입문 수료를 증명하세요.',
      business: '새 메뉴 도입의 첫걸음, BBTT 입문에서 시작합니다.',
      instructor: 'BBTT 입문부터 탄탄히 쌓아 강의 커리어를 준비하세요.',
      consultation: '고객 상담에 바로 적용할 수 있는 바디 진단 개념을 배웁니다.',
    },
  },
  COURSE_BBTT_PRO: {
    id: 'COURSE_BBTT_PRO',
    track: 'bbtt',
    level: 'regular',
    title: 'BBTT 정규 과정',
    subtitle: 'Body Balance Technical Training — Regular',
    description: '1~5년 경력 실무자를 위한 BBTT 정규 트랙. 진단·핸들링·메뉴화 전 과정을 체계화합니다.',
    programs: ['근막 해부 심화', 'BBTT 정규 핸들링 프로토콜', '체형 진단·자세 교정', '샵 메뉴 도입 컨설팅', '수료 인증'],
    openingByTone: {
      practical: '현장 매출과 직결되는 BBTT 정규 코스로 메뉴를 안정화하세요.',
      credential: '체계적 커리큘럼과 수료 인증으로 전문성을 증명하세요.',
      business: '재방문율과 객단가를 끌어올리는 BBTT 메뉴화 전략을 함께 설계합니다.',
      instructor: 'BBTT를 발판으로 강의 커리어를 준비하시려면 정규 → 마스터 트랙이 권장됩니다.',
      consultation: '고객 상담 시 신뢰를 주는 진단·설명법까지 함께 익힙니다.',
    },
  },
  COURSE_BBTT_MASTER: {
    id: 'COURSE_BBTT_MASTER',
    track: 'bbtt',
    level: 'master',
    title: 'BBTT 마스터 과정',
    subtitle: 'Body Balance Technical Training — Master',
    description: '5년 이상 경력자를 위한 BBTT 최상위 트랙. 고난도 케이스 대응, 후배 지도, 커리큘럼 설계 역량을 완성합니다.',
    programs: ['BBTT 고급 핸들링 & 케이스 스터디', '커리큘럼 설계 실전 훈련', '강의 시연 및 피드백', '마스터 인증 취득', '네트워크 연결 지원'],
    openingByTone: {
      practical: '최고 난이도 케이스까지 자신 있게 다루는 BBTT 마스터로 완성하세요.',
      credential: 'BBTT 마스터 인증으로 업계 최상위 전문가임을 증명하세요.',
      business: '마스터 역량으로 프리미엄 메뉴와 높은 객단가를 실현하세요.',
      instructor: '동료 교육·강의 운영까지 책임질 수 있는 마스터 트레이너가 됩니다.',
      consultation: '어떤 고객 케이스도 자신 있게 상담하는 마스터 컨설턴트로 성장합니다.',
    },
  },
  COURSE_HEADSPA_FOUNDATION: {
    id: 'COURSE_HEADSPA_FOUNDATION',
    track: 'headspa',
    level: 'intro',
    title: '헤드스파 입문 과정',
    subtitle: 'Head Spa & Scalp Care — Foundation',
    description: '두피 생리학과 헤드스파 기본 테크닉을 처음부터 배우는 입문 과정. 두피 타입별 관리법을 익힙니다.',
    programs: ['두피 생리학 기초', '헤드스파 기본 테크닉', '두피 타입 진단법', '홈케어 가이드 상담'],
    openingByTone: {
      practical: '두피·헤드스파 기초 테크닉을 빠르게 현장에 적용하세요.',
      credential: '체계적 입문 과정으로 헤드스파 전문성의 토대를 마련합니다.',
      business: '헤드스파 입문 메뉴로 신규 고객층을 넓혀보세요.',
      instructor: '헤드스파 강의 커리어의 출발점, 입문부터 체계적으로 쌓아갑니다.',
      consultation: '고객 두피 타입별 맞춤 상담법을 바로 익힙니다.',
    },
  },
  COURSE_HEADSPA_PRO: {
    id: 'COURSE_HEADSPA_PRO',
    track: 'headspa',
    level: 'regular',
    title: '헤드스파 정규 과정',
    subtitle: 'Head Spa & Scalp Care — Regular',
    description: '미용실·두피샵 종사자를 위한 헤드스파 정규 트랙. 증상별 케어 프로토콜과 메뉴 설계를 완성합니다.',
    programs: ['두피 증상별 케어 프로토콜', '헤드스파 심화 테크닉', '아로마·한방 복합 관리', '메뉴 패키지 설계', '수료 인증'],
    openingByTone: {
      practical: '탈모·지루·건성 두피 등 증상별 케어를 현장에서 즉시 활용하세요.',
      credential: '헤드스파 정규 수료 인증으로 전문 두피 관리사 역량을 공인받으세요.',
      business: '헤드스파 패키지 메뉴로 재방문율을 높이는 전략을 함께 설계합니다.',
      instructor: '정규 → 마스터 트랙으로 이어지는 헤드스파 강사 양성 로드맵을 밟아보세요.',
      consultation: '증상별 고객 상담 스크립트와 홈케어 제안법을 체계적으로 익힙니다.',
    },
  },
  COURSE_HEADSPA_MASTER: {
    id: 'COURSE_HEADSPA_MASTER',
    track: 'headspa',
    level: 'master',
    title: '헤드스파 마스터 과정',
    subtitle: 'Head Spa & Scalp Care — Master',
    description: '5년 이상 두피·헤드스파 경력자를 위한 마스터 트랙. 임상 케이스 심화 분석과 교육자 역량을 완성합니다.',
    programs: ['임상 두피 케이스 심화 분석', '헤드스파 커리큘럼 설계', '강의 시연 트레이닝', '국제 자격 연계 가이드', '마스터 인증 취득'],
    openingByTone: {
      practical: '어떤 두피 케이스도 자신 있게 다루는 마스터 테크니션으로 완성하세요.',
      credential: '헤드스파 마스터 인증으로 국내 최상위 전문가 타이틀을 취득합니다.',
      business: '마스터 브랜드로 프리미엄 헤드스파 서비스와 높은 단가를 실현하세요.',
      instructor: '후배 양성·강의 운영까지 이끌 수 있는 헤드스파 마스터 트레이너가 됩니다.',
      consultation: '복잡한 두피 케이스도 명확하게 상담·설명하는 마스터 컨설턴트가 됩니다.',
    },
  },
  COURSE_PLASMA_FOUNDATION: {
    id: 'COURSE_PLASMA_FOUNDATION',
    track: 'plasma',
    level: 'intro',
    title: '플라즈마 입문 과정',
    subtitle: 'Plasma Skin Care — Foundation',
    description: '플라즈마 기기의 원리와 기초 적용법을 배우는 입문 과정. 안전하고 효과적인 플라즈마 케어의 첫 걸음입니다.',
    programs: ['플라즈마 원리·안전 교육', '기초 피부 생리학', '플라즈마 기기 기본 적용', '트러블 피부 입문 케어'],
    openingByTone: {
      practical: '플라즈마 기초 적용법을 빠르게 익혀 현장에 바로 활용하세요.',
      credential: '공인 입문 과정으로 플라즈마 케어 전문성의 출발점을 마련합니다.',
      business: '플라즈마 입문 메뉴로 피부관리 샵의 서비스 범위를 넓혀보세요.',
      instructor: '플라즈마 강사 커리어를 위한 탄탄한 이론 기초를 쌓습니다.',
      consultation: '고객 피부 타입별 플라즈마 적용 여부를 정확히 상담합니다.',
    },
  },
  COURSE_PLASMA_PRO: {
    id: 'COURSE_PLASMA_PRO',
    track: 'plasma',
    level: 'regular',
    title: '플라즈마 정규 과정',
    subtitle: 'Plasma Skin Care — Regular',
    description: '피부·에스테틱 실무자를 위한 플라즈마 정규 트랙. 다양한 피부 케이스 대응과 메뉴화를 완성합니다.',
    programs: ['플라즈마 심화 이론', '증상별 케어 프로토콜 (여드름·색소·주름)', '복합 기기 응용', '플라즈마 메뉴 패키지 설계', '수료 인증'],
    openingByTone: {
      practical: '여드름·색소·주름 등 다양한 피부 케이스를 플라즈마로 해결하세요.',
      credential: '플라즈마 정규 수료 인증으로 피부관리 전문성을 공인받으세요.',
      business: '플라즈마 메뉴화로 고단가 서비스를 설계하고 객단가를 높이세요.',
      instructor: '정규 → 마스터로 이어지는 플라즈마 강사 양성 트랙을 밟아가세요.',
      consultation: '복잡한 피부 고민도 플라즈마 적용 여부를 자신 있게 상담합니다.',
    },
  },
  COURSE_PLASMA_MASTER: {
    id: 'COURSE_PLASMA_MASTER',
    track: 'plasma',
    level: 'master',
    title: '플라즈마 마스터 과정',
    subtitle: 'Plasma Skin Care — Master',
    description: '5년 이상 피부 관리 경력자를 위한 플라즈마 마스터 트랙. 고난도 케이스 분석과 교육자 역량을 완성합니다.',
    programs: ['플라즈마 임상 케이스 심화', '복합 장비 마스터 적용', '교육 커리큘럼 설계', '심사위원·강사 역할 연습', '마스터 인증 취득'],
    openingByTone: {
      practical: '어떤 난이도의 피부 케이스도 플라즈마로 자신 있게 대응하세요.',
      credential: '플라즈마 마스터 인증으로 업계 최고 수준의 전문가임을 증명합니다.',
      business: '마스터 브랜드로 프리미엄 플라즈마 서비스를 운영하고 높은 단가를 실현하세요.',
      instructor: '대회 심사위원·강사로 활동할 수 있는 마스터 트레이너가 됩니다.',
      consultation: '어떤 피부 문제도 정확히 진단·상담하는 마스터 컨설턴트가 됩니다.',
    },
  },
  COURSE_INSTRUCTOR_TRACK: {
    id: 'COURSE_INSTRUCTOR_TRACK',
    track: 'instructor',
    level: 'regular',
    title: '강사 양성 트랙',
    subtitle: 'Instructor Development — Regular',
    description: '교육 사업 진출을 준비하는 전문가를 위한 강사 양성 과정. 강의 스킬·커리큘럼 설계·실습 지도 역량을 체계적으로 쌓습니다.',
    programs: ['강의 설계 & 프레젠테이션 스킬', '실습 지도 방법론', '교안·매뉴얼 제작 실전', '모의 강의 & 피드백', '강사 자격 인증'],
    openingByTone: {
      practical: '강의 현장에서 즉시 써먹을 수 있는 티칭 스킬을 체계적으로 익힙니다.',
      credential: '강사 인증 취득으로 공인된 교육자임을 증명하세요.',
      business: '강의·세미나·워크샵으로 수익 채널을 다각화하는 전략을 함께 설계합니다.',
      instructor: '드디어 강사로서의 커리어를 시작합니다. 첫 걸음을 함께하겠습니다.',
      consultation: '수강생 상담·코칭까지 아우르는 전문 교육자로 성장합니다.',
    },
  },
  COURSE_MASTER_TRAINER: {
    id: 'COURSE_MASTER_TRAINER',
    track: 'instructor',
    level: 'master',
    title: '마스터 트레이너 과정',
    subtitle: 'Master Trainer — Advanced',
    description: '강의 경험을 보유한 전문가를 위한 최상위 트레이너 과정. 다수 강사 지도·대규모 세미나 운영·브랜드 구축 역량을 완성합니다.',
    programs: ['고급 강의 설계 & 브랜딩', '멀티 강사 관리 & 코칭', '대규모 세미나 운영 실전', '국제 무대 데뷔 가이드', '마스터 트레이너 인증'],
    openingByTone: {
      practical: '대규모 세미나와 다수 강사 운영까지 실전으로 준비합니다.',
      credential: '마스터 트레이너 인증으로 업계 최상위 교육자 타이틀을 취득합니다.',
      business: '강의 브랜드와 수익 구조를 체계화해 교육 사업을 완성합니다.',
      instructor: '강사를 가르치는 마스터 트레이너, 최상위 교육자로 완성됩니다.',
      consultation: '수강생·강사 모두를 이끄는 마스터 멘토로 성장합니다.',
    },
  },
  COURSE_CONSULTATION: {
    id: 'COURSE_CONSULTATION',
    track: 'undecided',
    level: 'any',
    title: '1:1 교육 상담',
    subtitle: 'Personalized Course Consultation',
    description: '어떤 트랙이 나에게 맞는지 아직 확신이 서지 않는다면, 원장님과 1:1 상담을 통해 최적의 교육 방향을 함께 찾아드립니다.',
    programs: ['현재 경력·목표 심층 인터뷰', '맞춤 교육 트랙 추천', '일정·비용 안내', '샘플 커리큘럼 미리 보기'],
    openingByTone: {
      practical: '어떤 기술을 배울지 아직 고민 중이라면, 먼저 상담으로 방향을 잡아보세요.',
      credential: '어떤 자격증이 나에게 맞는지 전문가와 함께 찾아드립니다.',
      business: '사업 목표에 맞는 최적 교육 트랙을 상담으로 설계해드립니다.',
      instructor: '강사를 목표로 하신다면, 상담에서 최적 로드맵을 함께 그립니다.',
      consultation: '고민을 편하게 말씀해주세요. 맞춤 방향을 함께 찾아드립니다.',
    },
  },
};

const COURSE_ID_MAP: Record<string, string> = {
  'bbtt-intro': 'COURSE_BBTT_FOUNDATION',
  'bbtt-regular': 'COURSE_BBTT_PRO',
  'bbtt-master': 'COURSE_BBTT_MASTER',
  'headspa-intro': 'COURSE_HEADSPA_FOUNDATION',
  'headspa-regular': 'COURSE_HEADSPA_PRO',
  'headspa-master': 'COURSE_HEADSPA_MASTER',
  'plasma-intro': 'COURSE_PLASMA_FOUNDATION',
  'plasma-regular': 'COURSE_PLASMA_PRO',
  'plasma-master': 'COURSE_PLASMA_MASTER',
  'instructor-regular': 'COURSE_INSTRUCTOR_TRACK',
  'instructor-master': 'COURSE_MASTER_TRAINER',
  'undecided-any': 'COURSE_CONSULTATION',
};

export function calculateGrowthResult(selectedAnswers: Record<string, string>): GrowthResult {
  const totals: GrowthTrackScores = { bbtt: 0, headspa: 0, plasma: 0, instructor: 0 };
  let levelHint: CourseLevel = 'regular';
  let toneHint: GrowthTone = 'practical';
  let intent: GrowthIntent = 'browse';
  let forceInstructor = false;

  let resolvedToneQ3: GrowthTone | null = null;
  let resolvedToneQ5: GrowthTone | null = null;
  let q3IsTeach = false;
  let q5IsExpand = false;
  let q3IsCertificate = false;
  let q5IsCredential = false;
  let q3IsRevenue = false;
  let q5IsBusiness = false;
  let q5IsConsult = false;
  let q1IsUndecided = false;
  let q2IsUnknown = false;

  for (const question of growthQuestions) {
    const optionId = selectedAnswers[question.id];
    if (!optionId) continue;

    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;

    totals.bbtt += option.trackScores.bbtt;
    totals.headspa += option.trackScores.headspa;
    totals.plasma += option.trackScores.plasma;
    totals.instructor += option.trackScores.instructor;

    if (option.levelHint) {
      levelHint = option.levelHint;
    }

    if (option.intent) {
      intent = option.intent;
      if (option.intent === 'instructor-path') {
        forceInstructor = true;
      }
    }

    if (question.id === 'g1') {
      if (optionId === 'g1-interest' || optionId === 'g1-other') {
        q1IsUndecided = true;
      }
    }
    if (question.id === 'g2') {
      if (optionId === 'g2-unknown') q2IsUnknown = true;
    }
    if (question.id === 'g3') {
      if (optionId === 'g3-teach') { q3IsTeach = true; resolvedToneQ3 = 'instructor'; }
      else if (optionId === 'g3-certificate') { q3IsCertificate = true; resolvedToneQ3 = 'credential'; }
      else if (optionId === 'g3-revenue') { q3IsRevenue = true; resolvedToneQ3 = 'business'; }
      else if (optionId === 'g3-skill') resolvedToneQ3 = 'practical';
    }
    if (question.id === 'g5') {
      if (optionId === 'g5-expand') { q5IsExpand = true; resolvedToneQ5 = 'instructor'; }
      else if (optionId === 'g5-credential') { q5IsCredential = true; resolvedToneQ5 = 'credential'; }
      else if (optionId === 'g5-business') { q5IsBusiness = true; resolvedToneQ5 = 'business'; }
      else if (optionId === 'g5-consult') { q5IsConsult = true; resolvedToneQ5 = 'consultation'; }
      else if (optionId === 'g5-practical') resolvedToneQ5 = 'practical';
    }
  }

  // Tone 결정
  if (q3IsTeach || q5IsExpand) {
    toneHint = 'instructor';
  } else if (q3IsCertificate || q5IsCredential) {
    toneHint = 'credential';
  } else if (q3IsRevenue || q5IsBusiness) {
    toneHint = 'business';
  } else if (q5IsConsult) {
    toneHint = 'consultation';
  } else {
    toneHint = resolvedToneQ3 || resolvedToneQ5 || 'practical';
  }

  // 트랙 결정
  let track: CourseTrack;
  if (forceInstructor) {
    track = 'instructor';
  } else {
    const maxScore = Math.max(totals.bbtt, totals.headspa, totals.plasma, totals.instructor);

    // Undecided fallback
    if (q2IsUnknown && q1IsUndecided && maxScore < 6) {
      track = 'undecided';
    } else {
      // argmax with priority: instructor > bbtt > headspa > plasma
      if (totals.instructor === maxScore) track = 'instructor';
      else if (totals.bbtt === maxScore) track = 'bbtt';
      else if (totals.headspa === maxScore) track = 'headspa';
      else track = 'plasma';
    }
  }

  // 레벨 결정
  let level: CourseLevel | 'any';
  if (track === 'undecided') {
    level = 'any';
  } else {
    level = levelHint;
    // Bump-up: 강의 목표 + 정규 → 마스터
    if (q3IsTeach && level === 'regular') level = 'master';
    // 강사 트랙 입문 없음 → 정규로 올림
    if (track === 'instructor' && level === 'intro') level = 'regular';
  }

  const courseKey = track === 'undecided' ? 'undecided-any' : `${track}-${level}`;
  const courseId = COURSE_ID_MAP[courseKey] || 'COURSE_CONSULTATION';

  return { track, level, tone: toneHint, intent, totals, courseId };
}
