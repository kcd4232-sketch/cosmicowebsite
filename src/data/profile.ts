import type { Qualification, Award } from '@/types';

export const qualifications: Qualification[] = [
  // 자격증/면허
  {
    id: 'q1',
    category: 'license',
    title: '코즈미코 BBTT 기술교육강사',
    subtitle: 'COSMICO BBTT Technical Education Instructor',
  },
  {
    id: 'q2',
    category: 'license',
    title: '피부미용 국가자격증',
    subtitle: 'National Certificate of Skin Care',
  },
  {
    id: 'q3',
    category: 'license',
    title: '미용사 종합면허증',
    subtitle: 'General Hairdresser\'s License',
  },
  {
    id: 'q4',
    category: 'license',
    title: '뷰티플라즈마 마스터 자격증',
    subtitle: 'Beauty Plasma Master Certificate',
  },
  {
    id: 'q5',
    category: 'license',
    title: '플라즈마 교육지사',
    subtitle: 'Plasma Education Branch Director',
  },
  {
    id: 'q6',
    category: 'license',
    title: '헤드스파 국제종합미용강사',
    subtitle: 'Head Spa International General Beauty Instructor',
  },
  // 전문 교육
  {
    id: 'e1',
    category: 'education',
    title: '성장판관리 전문과정 수료',
    subtitle: 'Specialized Growth Plate Management Course',
  },
  {
    id: 'e2',
    category: 'education',
    title: '얼굴축소비대칭관리 전문과정 수료',
    subtitle: 'Specialized Face Reduction & Asymmetry Management',
  },
  {
    id: 'e3',
    category: 'education',
    title: '에스테틱경영전문가 수료',
    subtitle: 'Aesthetic Management Professional Course',
  },
  {
    id: 'e4',
    category: 'education',
    title: '실용화장품상담전문가 수료',
    subtitle: 'Practical Cosmetic Consultation Professional Course',
  },
  {
    id: 'e5',
    category: 'education',
    title: '셀프피부미용상담전문가 수료',
    subtitle: 'Professional Self-Care Consultation Course',
  },
  {
    id: 'e6',
    category: 'education',
    title: '에스테틱소비자상담전문가 1급 수료',
    subtitle: 'Aesthetic Consumer Consulting Expert Grade 1',
  },
];

export const awards: Award[] = [
  {
    id: 'a1',
    year: 2023,
    title: '국제바디아트콘테스트 골드그랑프리 수상',
    organization: '국제바디아트콘테스트',
    category: '플라즈마 부문',
    medal: 'gold',
    description: '2023 국제바디아트콘테스트 플라즈마 부문 골드그랑프리 수상',
  },
  {
    id: 'a2',
    year: 2024,
    title: 'K뷰티월드콘테스트엑스포 플라즈마 심사위원',
    organization: 'K뷰티월드콘테스트엑스포',
    category: '플라즈마 심사위원',
    medal: 'special',
    description: '2024 K뷰티월드콘테스트엑스포 플라즈마 심사위원',
  },
  {
    id: 'a3',
    year: 2025,
    title: '한국휴먼올림픽국제뷰티대회 대상 수상',
    organization: '한국휴먼올림픽국제뷰티대회',
    category: '헤드스파 부문',
    medal: 'gold',
    description: '2025 한국휴먼올림픽국제뷰티대회 헤드스파 부문 대상 수상',
  },
  {
    id: 'a4',
    year: 2025,
    title: '베트남 GBTT 해외교육프로그램',
    organization: '하롱베이국립대학교 · 하노이약학대학교',
    category: '해외 강의',
    medal: 'special',
    description: '2025 베트남 GBTT 해외교육프로그램 — 하롱베이국립대학교, 하노이약학대학교 강의',
  },
  {
    id: 'a5',
    year: 2025,
    title: '스리랑카 GBTT 해외교육프로그램',
    organization: 'University of Kelaniya',
    category: '해외 강의',
    medal: 'special',
    description: '2025 스리랑카 GBTT 해외교육프로그램 — University of Kelaniya 강의',
  },
  {
    id: 'a6',
    year: 2026,
    title: '몽골 GBTT 해외교육프로그램',
    organization: 'Production Art Polytechnic College · CITI University',
    category: '해외 강의',
    medal: 'special',
    description: '2026 몽골 GBTT 해외교육프로그램 — Production Art Polytechnic College, CITI University 강의',
  },
];

export const specialties = [
  { id: 'bbtt', label: 'BBTT', description: 'Body Balance Technical Training' },
  { id: 'headspa', label: 'Head Spa', description: '두피 & 헤드스파 전문' },
  { id: 'plasma', label: 'Plasma', description: '플라즈마 피부관리' },
  { id: 'skin', label: '피부관리', description: '에스테틱 & 피부케어' },
  { id: 'scalp', label: '두피관리', description: '두피관리사 자격증 과정' },
  { id: 'lymph', label: '림프마사지', description: '림프드레나지 전문 교육' },
  { id: 'instructor', label: '강사 양성', description: '헤드스파·에스테틱 강사 양성 과정' },
];

export const aboutText = {
  greeting: '안녕하세요, 윤소연 원장입니다.',
  intro: `헤드스파, 두피관리, 림프마사지 전문 강사이자 COSMICO KOREA 공식 BBTT(Body Balance Technical Training) 강사로 활동하고 있습니다. 두피관리사 자격증, 헤드스파 강사 양성, 에스테틱 스킬업 교육을 대구를 거점으로 운영하며, 베트남·스리랑카·몽골에서 국제 세미나를 진행해왔습니다.`,
  detail: `다양한 국제대회 수상 경력과 풍부한 교육 이수를 바탕으로, 살롱 운영자·피부관리사·에스테틱 전문가를 위한 정규 교육 과정과 고객 맞춤형 헤드스파·바디관리를 제공합니다. 건강한 아름다움을 향한 여정을 함께하겠습니다.`,
  organization: 'COSMICO KOREA',
  instagram: 'https://www.instagram.com/imbeauty_pro?igsh=MXQyOHd1Yjh5dWN6eg==',
};
