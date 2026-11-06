// 헤드스파 제품 상세 페이지 (시안)
// 메뉴·사이트맵에 연결하지 않은 미리보기용 페이지. 검색엔진 노출 차단(noindex).
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  products,
  brandInfo,
  steps,
  getStudentPrice,
  formatWon,
  productImage,
  STUDENT_DISCOUNT_RATE,
  type Product,
  type ProductBrand,
} from '@/data/products';
import { aboutText } from '@/data/profile';

export const metadata: Metadata = {
  title: '헤드스파 제품 (시안)',
  description: '윤소연 원장 수업에서 사용하는 COSMICO 헤드스파 제품 — 모댑 · 사가유 · 디앤에잇',
  robots: { index: false, follow: false },
};

const BRAND_ORDER: ProductBrand[] = ['modab', 'sagau', 'dn8', 'set'];
const discountPct = STUDENT_DISCOUNT_RATE == null ? null : Math.round(STUDENT_DISCOUNT_RATE * 100);

function PriceBlock({ p }: { p: Product }) {
  const student = getStudentPrice(p);
  return (
    <div className="mt-auto pt-4 border-t border-[#0A1628]/10 space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs text-[#0A1628]/50">일반가</span>
        <span className="text-sm text-[#0A1628]/60">{formatWon(p.regularPrice)}</span>
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs font-bold text-[#C41E3A]">
          수강생가{discountPct != null && <span className="font-medium"> ({discountPct}%↓)</span>}
        </span>
        {student != null ? (
          <span className="text-lg font-extrabold text-[#C41E3A]">{formatWon(student)}</span>
        ) : (
          <span className="text-sm font-bold text-[#C41E3A]">별도 안내</span>
        )}
      </div>
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="relative flex flex-col bg-white rounded-2xl border border-[#0A1628]/10 overflow-hidden shadow-sm">
      <div className="relative aspect-square bg-[#F5F0EB]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={productImage(p)} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-contain p-6" />
        {p.soldOut && (
          <span className="absolute top-3 left-3 bg-[#0A1628] text-white text-xs font-bold px-2.5 py-1 rounded-full">
            품절
          </span>
        )}
        {p.needsCopy && (
          <span className="absolute top-3 right-3 bg-yellow-300 text-[#0A1628] text-[10px] font-bold px-2 py-0.5 rounded-full">
            설명 보완 필요
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[11px] font-bold tracking-widest text-[#C41E3A] uppercase">
          {brandInfo[p.brand].english}
        </p>
        <h3 className="mt-1 text-[17px] font-bold text-[#0A1628] leading-snug">{p.name}</h3>
        {p.volume && <p className="text-xs text-[#0A1628]/50 mt-0.5">{p.volume}</p>}
        <p className="mt-2 text-sm text-[#0A1628]/75 leading-relaxed">{p.summary}</p>
        <ul className="mt-3 mb-4 space-y-1">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-2 text-[13px] text-[#0A1628]/65 leading-snug">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C41E3A] flex-none" />
              {pt}
            </li>
          ))}
        </ul>
        <PriceBlock p={p} />
      </div>
    </article>
  );
}

export default function HeadspaProductsPage() {
  return (
    <div className="bg-[#F5F0EB] min-h-screen">
      {/* 시안 안내 띠 */}
      <div className="bg-[#0A1628] pt-20">
        <div className="bg-yellow-300 text-[#0A1628] text-xs sm:text-sm text-center px-4 py-2">
          <b>시안 미리보기</b> · 수강생 할인율 미정(별도 안내로 표시) · 시술 순서 확인 필요
        </div>
      </div>

      {/* 히어로 */}
      <section className="bg-[#0A1628] text-white">
        <div className="container-custom py-14 md:py-20">
          <p className="text-[#e6c76a] text-xs font-extrabold tracking-[0.2em]">COSMICO HEAD SPA PRODUCTS</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            수업에서 쓰는 그 제품,<br />그대로 샵에서
          </h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            윤소연 원장 헤드스파 교육에서 실습하는 모댑 · 사가유 · 디앤에잇 제품입니다.
            수강생·수료생 원장님께는 수강생가로 안내해 드려요.
          </p>

          {/* 가격 안내 */}
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs text-white/50">일반가</p>
              <p className="mt-1 font-bold">누구나 구매</p>
            </div>
            <div className="rounded-xl border border-[#C41E3A] bg-[#C41E3A]/15 p-4">
              <p className="text-xs text-[#ff8a9b]">수강생가{discountPct != null ? ` · ${discountPct}% 할인` : ' · 별도 안내'}</p>
              <p className="mt-1 font-bold">수강생·수료생 원장님</p>
            </div>
          </div>

          {/* 브랜드 바로가기 */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {BRAND_ORDER.map((b) => (
              <a
                key={b}
                href={`#${b}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#C41E3A] text-sm font-semibold transition-colors"
              >
                {brandInfo[b].name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 시술 순서 지도 */}
      <section className="container-custom py-14">
        <p className="text-[#C41E3A] text-xs font-extrabold tracking-[0.15em]">HEAD SPA ROUTINE</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#0A1628]">헤드스파 한 회, 이 순서로 씁니다</h2>
        <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((st, i) => {
            const items = products.filter((p) => p.step === st.id);
            return (
              <li key={st.id} className="bg-white rounded-2xl border border-[#0A1628]/10 p-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0A1628] text-white text-sm font-bold grid place-items-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-[#0A1628]">{st.label}</p>
                    <p className="text-xs text-[#0A1628]/50">{brandInfo[st.brand].name}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#0A1628]/70">{st.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((p) => (
                    <li key={p.id} className="text-[11px] bg-[#F5F0EB] text-[#0A1628]/80 rounded-full px-2.5 py-1">
                      {p.name.replace(/^(모댑|디앤에잇|사가)\s?/, '')}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      {/* 브랜드별 제품 */}
      {BRAND_ORDER.map((b) => {
        const items = products.filter((p) => p.brand === b);
        return (
          <section key={b} id={b} className="container-custom py-10 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-2 border-b-2 border-[#0A1628] pb-3 mb-6">
              <div>
                <p className="text-[#C41E3A] text-xs font-extrabold tracking-[0.15em] uppercase">{brandInfo[b].english}</p>
                <h2 className="text-2xl font-bold text-[#0A1628]">{brandInfo[b].name}</h2>
              </div>
              <p className="text-sm text-[#0A1628]/60">{brandInfo[b].desc}</p>
            </div>

            {b === 'sagau' && (
              <div className="mb-6 rounded-2xl bg-[#0A1628] text-white p-5 text-sm leading-relaxed">
                <b className="text-[#f3d27a]">오일 고르는 법</b> · 향이나 성분에 민감한 고객은{' '}
                <b>사가 만달라</b>(성분 4가지, 사가 시리즈 중 가장 순한 오일)를, 공부·명상처럼 집중이 필요한
                고객에게는 <b>사가 스터디</b>를 권해요.
                <span className="text-white/60"> 사가유·사가 노바의 고객별 추천은 원장님 수업 기준으로 채워 넣을 예정입니다.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        );
      })}

      {/* 수강생가 안내 + 문의 */}
      <section className="container-custom py-14">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-[#0A1628]/10 p-6">
            <h2 className="text-xl font-bold text-[#0A1628]">수강생가는 이렇게 적용돼요</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#0A1628]/75">
              <li>• 대상: 윤소연 원장 교육 과정 수강생·수료생 원장님</li>
              <li>• 주문할 때 수강 기수와 이름을 알려주세요</li>
              <li>• 확인 후 수강생가로 안내해 드립니다</li>
            </ul>
          </div>
          <div className="bg-[#0A1628] text-white rounded-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold">제품 구매·상담 문의</h2>
            <p className="mt-2 text-sm text-white/65">
              어떤 제품부터 시작할지 모르겠다면 편하게 물어보세요. 샵 상황에 맞춰 추천해 드려요.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={aboutText.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-5 py-3 bg-[#C41E3A] rounded-full font-bold hover:bg-[#e02446] transition-colors"
              >
                인스타 DM 문의
              </a>
              <Link
                href="/professional-growth"
                className="flex-1 text-center px-5 py-3 border border-white/25 rounded-full font-semibold hover:border-white/60 transition-colors"
              >
                교육 진단 받아보기
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-[#0A1628]/45 leading-relaxed">
          일반가는 COSMICO 공식 쇼핑몰 판매가 기준입니다. 화장품은 질병의 예방·치료를 위한 의약품이 아닙니다.
        </p>
      </section>
    </div>
  );
}
