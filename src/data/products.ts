// 헤드스파 제품 상세 페이지 데이터 (시안)
// 출처: COSMICO 쇼핑몰(cosmicokorea.com/shop) 디앤에잇·모댑·사가유·프로모션 카테고리 + 각 제품 상세 이미지
// 제외: 종이봉투, 코즈미코 프로페셔널(패키지·BBTT), IGBI(자격시험)
//
// 가격 규칙
// - regularPrice : 일반가 = COSMICO 쇼핑몰 판매가
// - 수강생가     : STUDENT_DISCOUNT_RATE 가 null 이면 "별도 안내"로 표시
//                  할인율이 정해지면 0.1(=10%)처럼 숫자를 넣으면 전체에 자동 적용
//                  제품별로 다르게 하려면 해당 제품에 studentPrice 를 직접 입력

export const STUDENT_DISCOUNT_RATE: number | null = null; // 아직 미정

export type ProductBrand = 'modab' | 'sagau' | 'dn8' | 'set';
export type ProductStep = 'shampoo' | 'pack' | 'oil' | 'facial';

export interface Product {
  id: string;
  brand: ProductBrand;
  step?: ProductStep;
  name: string;
  englishName?: string;
  volume?: string;
  summary: string;
  points: string[];
  regularPrice: number;
  studentPrice?: number;
  soldOut?: boolean;
  needsCopy?: boolean; // 설명 문구 보완 필요
  shopUrl: string;
}

const SHOP = 'https://www.cosmicokorea.com/shop/detailView.asp?gidx=';

export const productImage = (p: Product) => `/images/products/${p.id}.webp`;

export const brandInfo: Record<ProductBrand, { name: string; english: string; desc: string }> = {
  modab: { name: '모댑', english: 'Mo dab', desc: '헤드스파의 시작, 두피 클렌징과 두피팩' },
  sagau: { name: '사가유', english: 'SAGA.U', desc: '헤드스파 마사지를 완성하는 아로마 오일' },
  dn8: {
    name: '디앤에잇',
    english: 'Dn.8',
    desc: '한국 에스테틱 테크닉과 현장 경험으로 만든 전문가용 스킨케어',
  },
  set: { name: '세트', english: 'Promotion', desc: '자주 쓰는 제품을 한 번에' },
};

// 시술 순서 (⚠️ 시안: 실제 수업 순서에 맞게 확인 필요)
export const steps: { id: ProductStep; label: string; desc: string; brand: ProductBrand }[] = [
  { id: 'shampoo', label: '두피 클렌징', desc: '샴푸로 두피와 모발을 깨끗하게', brand: 'modab' },
  { id: 'pack', label: '두피팩', desc: '헤드스파 관리 후 거품 타입 두피팩', brand: 'modab' },
  { id: 'oil', label: '오일 마사지', desc: '고객 상태에 맞춘 아로마 오일', brand: 'sagau' },
  { id: 'facial', label: '페이셜 마무리', desc: '클렌저 → 부스터 → 세럼 → 크림', brand: 'dn8' },
];

export const products: Product[] = [
  // ===== 모댑 =====
  {
    id: 'modab-blue',
    brand: 'modab',
    step: 'shampoo',
    name: '모댑 블루 디톡시파잉 샴푸',
    englishName: 'Blue Detoxifying Shampoo',
    summary: '멘톨의 산뜻한 사용감으로 두피를 개운하게 클렌징하는 샴푸',
    points: ['순한 글루코사이드계 세정 성분', '병풀·네틀·당귀·로즈마리 추출물', '펌프 별도 동봉'],
    regularPrice: 66000,
    shopUrl: `${SHOP}89`,
  },
  {
    id: 'modab-mandala',
    brand: 'modab',
    step: 'shampoo',
    name: '모댑 만달라 샴푸',
    englishName: 'Mandala Shampoo',
    volume: '500ml',
    summary: '두피를 맑게, 마음을 편안하게. 만다린 향의 두피 웰니스 샴푸',
    points: ['만다린 껍질 오일·호호바 오일', '한방 식물 추출물 블렌딩', '거품 낸 뒤 3분 두면 더 좋아요'],
    regularPrice: 67000,
    shopUrl: `${SHOP}114`,
  },
  {
    id: 'modab-plusmas',
    brand: 'modab',
    step: 'pack',
    name: '모댑 플러스마스 팩',
    englishName: 'Plusmas Pack',
    summary: '코즈미코 헤드스파 관리 후 사용하는 거품 타입 두피팩',
    points: [
      '간편한 사용, 잔여감 없는 마무리',
      '샵 관리와 홈케어 모두 고려한 설계',
      '다시마·바다포도 추출물·해양 심층수',
      '황련·레몬·해바라기 추출물, 카페인 함유',
    ],
    regularPrice: 59000,
    shopUrl: `${SHOP}105`,
  },

  // ===== 사가유 =====
  {
    id: 'saga-u',
    brand: 'sagau',
    step: 'oil',
    name: '뉴 사가유 오일 [혼합]',
    englishName: 'SAGAU Oil',
    volume: '50ml',
    summary: '사가 오일 시리즈 · 헤드스파 관리용 아로마 오일',
    points: ['K 헤드스파 퍼스트 스텝 패키지 구성 오일'],
    regularPrice: 140000,
    needsCopy: true,
    shopUrl: `${SHOP}109`,
  },
  {
    id: 'saga-study',
    brand: 'sagau',
    step: 'oil',
    name: '사가 스터디 오일',
    englishName: 'SAGA Study Oil',
    volume: '50ml',
    summary: '공부와 집중의 순간을 위한 아로마 블렌딩 오일',
    points: [
      '호호바 오일 베이스',
      '레몬·라벤더·로즈마리·유칼립투스·편백·프랑킨센스·마조람·샌달우드',
      '공부할 때, 명상할 때, 잠들기 전 향기 루틴으로',
    ],
    regularPrice: 140000,
    shopUrl: `${SHOP}97`,
  },
  {
    id: 'saga-mandala',
    brand: 'sagau',
    step: 'oil',
    name: '사가 만달라 오일',
    englishName: 'SAGA Maṇḍala Oil',
    volume: '50ml',
    summary: '향과 성분에 민감한 고객을 위한, 사가 시리즈 중 가장 순한 오일',
    points: ['성분 단 4가지: 호호바·만다린·네롤리·동백', '불필요한 향과 성분을 뺀 최소 처방', '민감한 고객 관리용 대체 오일'],
    regularPrice: 140000,
    shopUrl: `${SHOP}111`,
  },
  {
    id: 'saga-nova',
    brand: 'sagau',
    step: 'oil',
    name: '사가 노바 오일',
    englishName: 'SAGA Nova Oil',
    summary: '장미와 자스민 향의 플로럴 아로마 오일',
    points: ['로즈힙씨 오일', '다마스크장미꽃 오일', '아라비안자스민꽃 오일'],
    regularPrice: 150000,
    soldOut: true,
    shopUrl: `${SHOP}110`,
  },

  // ===== 디앤에잇 =====
  {
    id: 'dn8-cleanser',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 시카푸카 클렌저',
    englishName: 'Cicapukka Cleanser',
    volume: '100ml',
    summary: '에스테틱에서 선택한 시카 진정 클렌저',
    points: ['먼지·유분·메이크업을 녹이듯 세정', '세안 후 잔여감이 적은 사용감', '거칠고 예민해 보이는 피부 컨디션에'],
    regularPrice: 44000,
    shopUrl: `${SHOP}118`,
  },
  {
    id: 'dn8-booster',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 리주버네이션 부스터',
    englishName: 'Rejuvenation Booster',
    volume: '120ml',
    summary: '피부의 길을 열어주는 첫 단계',
    points: ['세안 후 가장 먼저 쓰는 고기능 부스터', '건조하고 거칠게 느껴지는 피부에', '모든 피부 타입'],
    regularPrice: 120000,
    shopUrl: `${SHOP}104`,
  },
  {
    id: 'dn8-serum',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 블루 넵투누스 세럼',
    englishName: 'Blue Neptūnus Serum',
    volume: '50ml',
    summary: '피부의 빛을 되찾는 힘',
    points: ['부스터 다음 단계에 사용', '리뉴얼 제품', '모든 피부 타입'],
    regularPrice: 130000,
    shopUrl: `${SHOP}112`,
  },
  {
    id: 'dn8-cream',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 울트라_8 페이셜 크림',
    englishName: 'Ultra_8 Facial Cream',
    volume: '50g',
    summary: '고영양으로 꽉 채우는 리페어 케어',
    points: ['부스터 → 세럼 → 크림 루틴의 마무리', '모든 피부 타입'],
    regularPrice: 140000,
    shopUrl: `${SHOP}113`,
  },

  // ===== 세트 (프로모션) =====
  {
    id: 'dn8-set3',
    brand: 'set',
    name: '[3세트] 디앤에잇 3종',
    englishName: 'Dn.8 3-Step Set ×3',
    volume: '부스터 3 · 세럼 3 · 크림 3 (총 9개)',
    summary: '부스터·세럼·크림 3단계 루틴을 3세트로 한 번에',
    points: ['디앤에잇 3단계 루틴 전체 구성', '샵 비치용으로 넉넉하게'],
    regularPrice: 1170000,
    shopUrl: `${SHOP}115`,
  },
];

/** 수강생가. 할인율 미정이면 null → 화면에 "별도 안내" */
export function getStudentPrice(p: Product): number | null {
  if (p.studentPrice) return p.studentPrice;
  if (STUDENT_DISCOUNT_RATE == null) return null;
  return Math.floor((p.regularPrice * (1 - STUDENT_DISCOUNT_RATE)) / 100) * 100; // 100원 단위 내림
}

export const formatWon = (n: number) => `${n.toLocaleString('ko-KR')}원`;
