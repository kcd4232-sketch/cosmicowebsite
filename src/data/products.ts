// 헤드스파 제품 상세 페이지 데이터 (시안)
// 출처: COSMICO 쇼핑몰(cosmicokorea.com/shop) 디앤에잇·모댑·사가유·프로모션 카테고리
// 제외: 종이봉투, 코즈미코 프로페셔널(패키지·BBTT), IGBI(자격시험)
//
// 가격 규칙
// - regularPrice : 일반가 = COSMICO 쇼핑몰 판매가
// - studentPrice : 수강생가. 비워두면 STUDENT_DISCOUNT_RATE 로 자동 계산
//   ⚠️ 할인율은 예시값입니다. 확정되면 아래 숫자만 바꾸거나 제품별 studentPrice 를 직접 입력하세요.

export const STUDENT_DISCOUNT_RATE = 0.1; // 예시: 10%

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
  image: string;
  soldOut?: boolean;
  needsCopy?: boolean; // 쇼핑몰 상세가 이미지뿐이라 설명 문구 보완 필요
  shopUrl: string;
}

const IMG = 'https://www.cosmicokorea.com/upload/Goods/img1/';
const SHOP = 'https://www.cosmicokorea.com/shop/detailView.asp?gidx=';

export const brandInfo: Record<ProductBrand, { name: string; english: string; desc: string }> = {
  modab: { name: '모댑', english: 'Mo dab', desc: '헤드스파의 시작, 두피 클렌징과 헤어팩' },
  sagau: { name: '사가유', english: 'SAGA.U', desc: '헤드스파 마사지를 완성하는 아로마 오일' },
  dn8: { name: '디앤에잇', english: 'D&8', desc: '헤드스파 후 페이셜 마무리 스킨케어' },
  set: { name: '세트', english: 'Promotion', desc: '자주 쓰는 제품을 한 번에' },
};

// 시술 순서 (⚠️ 시안: 실제 수업 순서에 맞게 확인 필요)
export const steps: { id: ProductStep; label: string; desc: string; brand: ProductBrand }[] = [
  { id: 'shampoo', label: '두피 클렌징', desc: '샴푸로 두피와 모발을 깨끗하게', brand: 'modab' },
  { id: 'pack', label: '헤어팩', desc: '클렌징 후 모발·두피 케어', brand: 'modab' },
  { id: 'oil', label: '오일 마사지', desc: '고객 상태에 맞춘 아로마 오일', brand: 'sagau' },
  { id: 'facial', label: '페이셜 마무리', desc: '부스터 → 세럼 → 크림', brand: 'dn8' },
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
    image: `${IMG}nmpoei2.png`,
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
    image: `${IMG}man0.png`,
    shopUrl: `${SHOP}114`,
  },
  {
    id: 'modab-plusmas',
    brand: 'modab',
    step: 'pack',
    name: '모댑 플러스마스',
    englishName: 'Plus Mas Hair Pack',
    summary: '해양 성분과 식물 추출물을 담은 헤어팩',
    needsCopy: true,
    points: ['카페인·해수·다시마 추출물', '다마스크장미꽃수', '가수분해 콜라겐'],
    regularPrice: 59000,
    image: `${IMG}plusmasx-001.png`,
    shopUrl: `${SHOP}105`,
  },

  // ===== 사가유 =====
  {
    id: 'saga-u',
    brand: 'sagau',
    step: 'oil',
    name: '뉴 사가유 오일 [혼합]',
    englishName: 'SAGA.U Oil',
    summary: '사가 오일 시리즈 · 헤드스파 관리용 아로마 오일',
    points: ['K 헤드스파 퍼스트 스텝 패키지 구성 오일'],
    needsCopy: true,
    regularPrice: 140000,
    image: `${IMG}010.png`,
    shopUrl: `${SHOP}109`,
  },
  {
    id: 'saga-study',
    brand: 'sagau',
    step: 'oil',
    name: '사가 스터디 오일',
    englishName: 'SAGA Study Oil',
    summary: '사가 오일 시리즈 · 헤드스파 관리용 아로마 오일',
    points: ['K 헤드스파 퍼스트 스텝 패키지 구성 오일'],
    needsCopy: true,
    regularPrice: 140000,
    image: `${IMG}011.png`,
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
    image: `${IMG}012.png`,
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
    image: `${IMG}009.png`,
    soldOut: true,
    shopUrl: `${SHOP}110`,
  },

  // ===== 디앤에잇 =====
  {
    id: 'dn8-cleanser',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 시카푸카 클렌저',
    englishName: 'Cica Pukka Cleanser',
    summary: '디앤에잇 라인의 클렌저',
    points: ['K 헤드스파 퍼스트 스텝 패키지 구성품'],
    needsCopy: true,
    regularPrice: 44000,
    image: `${IMG}cicapukka_co-001.png`,
    shopUrl: `${SHOP}118`,
  },
  {
    id: 'dn8-booster',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 리주버네이션 부스터',
    englishName: 'Rejuvenation Booster',
    summary: '피부의 길을 열어주는 첫 번째 단계',
    points: ['디앤에잇 부스터 → 세럼 → 크림 루틴의 첫 단계'],
    needsCopy: true,
    regularPrice: 120000,
    image: `${IMG}001%5B10%5D.png`,
    shopUrl: `${SHOP}104`,
  },
  {
    id: 'dn8-serum',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 블루 넵투누스 세럼',
    englishName: 'Blue Neptunus Serum',
    summary: '리뉴얼된 디앤에잇 블루 넵투누스 세럼',
    points: ['디앤에잇 부스터 → 세럼 → 크림 루틴의 2단계'],
    needsCopy: true,
    regularPrice: 130000,
    image: `${IMG}002%5B8%5D.png`,
    shopUrl: `${SHOP}112`,
  },
  {
    id: 'dn8-cream',
    brand: 'dn8',
    step: 'facial',
    name: '디앤에잇 울트라 훼이셜_8 크림',
    englishName: 'Ultra Facial_8 Cream',
    summary: '디앤에잇 3단계 루틴을 마무리하는 크림',
    points: ['디앤에잇 부스터 → 세럼 → 크림 루틴의 마지막 단계'],
    needsCopy: true,
    regularPrice: 140000,
    image: `${IMG}003%5B3%5D.png`,
    shopUrl: `${SHOP}113`,
  },

  // ===== 세트 (프로모션) =====
  {
    id: 'dn8-set3',
    brand: 'set',
    name: '[3세트] 디앤에잇 3종',
    englishName: 'D&8 3-Step Set ×3',
    volume: '부스터 3 · 세럼 3 · 크림 3 (총 9개)',
    summary: '부스터·세럼·크림 3단계 루틴을 3세트로 한 번에',
    points: ['디앤에잇 3단계 루틴 전체 구성', '단품 합계와 같은 가격 (세트 혜택은 확인 필요)'],
    regularPrice: 1170000,
    image: `${IMG}3.png`,
    shopUrl: `${SHOP}115`,
  },
];

export function getStudentPrice(p: Product): number {
  if (p.studentPrice) return p.studentPrice;
  // 100원 단위 내림
  return Math.floor((p.regularPrice * (1 - STUDENT_DISCOUNT_RATE)) / 100) * 100;
}

export const formatWon = (n: number) => `${n.toLocaleString('ko-KR')}원`;
