import type { Project } from '@/types';

export const projects: Project[] = [
  // ── BBTT ──────────────────────────────────────────────────────────────────
  // p1: 2026 BBTT 워크샵 부산 — 사진 준비 중, 추후 추가 예정
  {
    id: 'p7',
    slug: 'bbtt-workshop-hwaseong',
    title: '경기도 화성 BBTT 워크샵',
    subtitle: 'BBTT 테크닉 전문가 워크샵 (경기도 화성)',
    category: 'bbtt',
    date: '2026',
    location: '경기도 화성, 대한민국',
    description: '경기도 화성에서 개최된 BBTT 전문 워크샵. 바디 밸런스 테크닉 실습 중심의 교육 과정.',
    longDescription: `경기도 화성에서 개최된 BBTT(Body Balance Technical Training) 전문 워크샵입니다.

바디 밸런스의 핵심 원리와 실전 테크닉을 집중적으로 다루며, 참가자들이 현장에서 바로 적용할 수 있는 실습 중심의 교육으로 진행되었습니다.`,
    coverImage: '/images/seminars/bbtt-workshop-hwaseong.jpg.png',
    coverAlt: '2026 경기도 화성 BBTT 워크샵 - 바디밸런스 테크닉 전문가 교육',
    gallery: [
      '/images/seminars/bbtt-workshop-hwaseong-1.jpg.png',
      '/images/seminars/bbtt-workshop-hwaseong-2.jpg.png',
      '/images/seminars/bbtt-workshop-hwaseong-3.jpg.png',
      '/images/seminars/bbtt-workshop-hwaseong-4.jpg.png',
    ],
    galleryAltBase: '2026 경기도 화성 BBTT 워크샵 현장 - 바디밸런스 테크닉 실습',
    tags: ['BBTT', '바디밸런스', '워크샵', '화성', '경기도'],
    featured: false,
  },
  // p3: K-뷰티 바디밸런스 목·어깨 세미나 — 사진 준비 중, 추후 추가 예정
  {
    id: 'p6',
    slug: 'mongolia-bbtt-seminar-2026',
    title: '2026 몽골 BBTT 세미나 교육',
    subtitle: 'BBTT 테크닉 해외 전문가 교육 (몽골)',
    category: 'bbtt',
    date: '2026.04.28 – 05.04',
    location: '몽골',
    description: 'BBTT(Body Balance Technical Training) 테크닉을 몽골 현지 전문가들에게 전수한 해외 교육 세미나.',
    longDescription: `BBTT(Body Balance Technical Training) 테크닉 전문 교육 세미나로, 2026년 4월 28일부터 5월 4일까지 몽골 현지에서 진행되었습니다.

바디 밸런스의 핵심 원리, 목과 어깨 불균형 교정 테크닉, 실전 적용 방법을 체계적으로 교육하였으며, 몽골 현지 미용·테라피 전문가들이 직접 실습할 수 있도록 구성된 심화 과정입니다.

참가자들이 현장에서 즉시 활용 가능한 BBTT 테크닉을 습득할 수 있도록 이론과 실습을 병행하여 진행하였습니다.`,
    coverImage: '/images/seminars/mongolia-bbtt-2026.jpg.png',
    coverAlt: '2026 몽골 BBTT 세미나 - 윤소연 원장 해외 전문가 교육',
    gallery: [
      '/images/seminars/mongolia-bbtt-2026-1.jpg.png',
      '/images/seminars/mongolia-bbtt-2026-2.jpg.png',
      '/images/seminars/mongolia-bbtt-2026-3.jpg.png',
      '/images/seminars/mongolia-bbtt-2026-4.jpg.png',
      '/images/seminars/mongolia-bbtt-2026-5.jpg.png',
      '/images/seminars/mongolia-bbtt-2026-6.jpg.png',
      '/images/seminars/mongolia-bbtt-2026-7.jpg.png',
    ],
    galleryAltBase: '2026 몽골 BBTT 세미나 현장 - 두피 림프 마사지 실습',
    tags: ['BBTT', '바디밸런스', '테크닉교육', '몽골', '해외세미나'],
    featured: true,
  },
  {
    id: 'p4',
    slug: 'busan-seminar',
    title: '부산 BBTT 세미나',
    subtitle: '지역 전문가 BBTT 교육 세미나',
    category: 'bbtt',
    date: '2024',
    location: '부산, 대한민국',
    description: '부산 지역 미용·테라피 전문가들을 대상으로 한 BBTT 테크닉 심화 교육 세미나.',
    longDescription: `부산 지역 미용·테라피 전문가들을 위한 BBTT 전문 세미나입니다.

현장 실습 중심의 교육으로 이론과 실제를 함께 배울 수 있는 기회를 제공합니다.`,
    coverImage: '/images/seminars/busan-seminar.jpg.jpg',
    coverAlt: '2024 부산 BBTT 세미나 - 지역 전문가 교육',
    gallery: [
      '/images/seminars/busan-seminar-1.jpg.jpg',
      '/images/seminars/busan-seminar-2.jpg.jpg',
      '/images/seminars/busan-seminar-3.jpg.jpg',
    ],
    galleryAltBase: '2024 부산 BBTT 세미나 현장 - 바디밸런스 전문가 실습',
    tags: ['BBTT', '부산', '바디밸런스', '전문가교육'],
    featured: false,
  },
  {
    id: 'p5',
    slug: 'srilanka-seminar',
    title: '스리랑카 BBTT 국제 세미나',
    subtitle: '해외 BBTT 전문가 교육 세미나',
    category: 'bbtt',
    date: '2024',
    location: '스리랑카',
    description: '스리랑카에서 개최된 BBTT 국제 세미나. 해외 전문가들에게 한국의 바디밸런스 테크닉을 전수.',
    longDescription: `스리랑카에서 개최된 BBTT 국제 미용·테라피 세미나입니다.

한국의 선진 BBTT 테크닉을 해외 전문가들에게 전수하고, 다양한 문화적 배경을 가진 전문가들과 기술을 교류하는 글로벌 세미나입니다.`,
    coverImage: '/images/seminars/srilanka-seminar.jpg.png',
    coverAlt: '2024 스리랑카 BBTT 국제 세미나 - 해외 전문가 교육',
    gallery: [
      '/images/seminars/srilanka-seminar-1.jpg.png',
      '/images/seminars/srilanka-seminar-2.jpg.png',
      '/images/seminars/srilanka-seminar-3.jpg.png',
      '/images/seminars/srilanka-seminar-4.jpg.png',
      '/images/seminars/srilanka-seminar-5.jpg.png',
      '/images/seminars/srilanka-seminar-6.jpg.png',
      '/images/seminars/srilanka-seminar-7.jpg.png',
    ],
    galleryAltBase: '2024 스리랑카 BBTT 국제 세미나 현장 - 해외 전문가 교육',
    tags: ['BBTT', '스리랑카', '국제세미나', '해외교육'],
    featured: true,
  },

  // ── Head Spa ──────────────────────────────────────────────────────────────
  {
    id: 'p2',
    slug: 'gbtt-vietnam-lymph-headspa-2025',
    title: '2025 GBTT 베트남 마스터 림프 해독 세미나',
    subtitle: '헤드스파 국제 세미나 (베트남)',
    category: 'headspa',
    date: '2025',
    location: '베트남',
    description: '베트남에서 진행된 GBTT 마스터 클래스. 림프 해독과 헤드스파를 결합한 국제 세미나입니다.',
    longDescription: `베트남에서 개최된 GBTT(Global Body Balance Technical Training) 마스터 클래스 세미나입니다.

림프 해독 메커니즘과 헤드스파의 결합으로 두피 건강과 전신 순환을 동시에 케어하는 고급 기술을 전수합니다.`,
    coverImage: '/images/seminars/gbtt-vietnam-2025.jpg.png',
    coverAlt: '2025 베트남 GBTT 마스터 림프 해독 헤드스파 국제 세미나',
    gallery: [
      '/images/seminars/gbtt-vietnam-2025-1.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-2.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-3.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-4.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-5.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-6.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-7.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-8.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-9.jpg.png',
      '/images/seminars/gbtt-vietnam-2025-10.jpg.png',
    ],
    galleryAltBase: '2025 베트남 GBTT 세미나 강의 모습 - 헤드스파 림프 해독 교육',
    tags: ['헤드스파', '림프해독', 'GBTT', '베트남', '국제세미나'],
    featured: true,
  },
  {
    id: 'p8',
    slug: 'headspa-daegu-seminar',
    title: '대구 헤드스파 세미나',
    subtitle: '헤드스파 전문가 교육 세미나 (대구)',
    category: 'headspa',
    date: '2025',
    location: '대구, 대한민국',
    description: '대구에서 개최된 헤드스파 전문 세미나. 두피 케어와 림프 순환을 결합한 실습 중심 교육 과정.',
    longDescription: `대구에서 개최된 헤드스파 전문 세미나입니다.

두피 건강 관리와 림프 순환 테크닉을 결합한 실습 중심의 교육으로, 현장에서 바로 활용할 수 있는 헤드스파 기술을 전수합니다.`,
    coverImage: '/images/seminars/headspa-daegu.jpg.jpg',
    coverAlt: '2025 대구 헤드스파 세미나 - 두피관리 전문가 교육',
    gallery: [
      '/images/seminars/headspa-daegu-1.jpg.jpg',
      '/images/seminars/headspa-daegu-2.jpg.jpg',
      '/images/seminars/headspa-daegu-3.jpg.jpg',
    ],
    galleryAltBase: '2025 대구 헤드스파 세미나 현장 - 두피관리 실습',
    tags: ['헤드스파', '대구', '두피케어', '림프순환', '세미나'],
    featured: false,
  },

  // ── Plasma ────────────────────────────────────────────────────────────────
  // 추후 Plasma 세미나 항목을 여기에 추가하세요.
];

export const projectCategories = [
  { id: 'all', label: '전체' },
  { id: 'bbtt', label: 'BBTT' },
  { id: 'headspa', label: 'Head Spa' },
  { id: 'plasma', label: 'Plasma' },
];
