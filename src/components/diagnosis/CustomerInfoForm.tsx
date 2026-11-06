'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { CustomerInfo } from '@/types';
import { privacyConsentText, marketingConsentText } from '@/lib/consent';

interface CustomerInfoFormProps {
  onSubmit: (info: CustomerInfo) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const PHONE_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;

export default function CustomerInfoForm({ onSubmit, onBack, isSubmitting }: CustomerInfoFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; privacy?: string }>({});

  const allChecked = privacyConsent && marketingConsent;
  const toggleAll = () => {
    const next = !allChecked;
    setPrivacyConsent(next);
    setMarketingConsent(next);
    if (next) setErrors((e) => ({ ...e, privacy: undefined }));
  };

  const validate = () => {
    const newErrors: { name?: string; phone?: string; privacy?: string } = {};
    if (!name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요';
    } else if (!PHONE_REGEX.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = '올바른 전화번호 형식으로 입력해주세요 (예: 010-1234-5678)';
    }
    if (!privacyConsent) newErrors.privacy = '개인정보 수집·이용에 동의해주셔야 결과를 받아보실 수 있어요';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        name: name.trim(),
        phone: phone.trim(),
        privacyConsent,
        marketingConsent,
        consentedAt: new Date().toISOString(),
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      {/* 안내 카드 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
        <div className="text-center mb-6">
          <div className="text-3xl mb-3">📋</div>
          <h2 className="text-white text-2xl font-bold mb-2">진단 결과 받기</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            맞춤 결과를 확인하고 원장님께 전달드립니다.<br />
            상담을 원하시면 연락처를 남겨주세요.
          </p>
        </div>

        <div className="h-px bg-white/10 mb-6" />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 이름 */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              이름 <span className="text-[#C41E3A]">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#C41E3A] transition-colors ${
                errors.name ? 'border-red-500' : 'border-white/15'
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
            )}
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              연락처 <span className="text-[#C41E3A]">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-1234-5678"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#C41E3A] transition-colors ${
                errors.phone ? 'border-red-500' : 'border-white/15'
              }`}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
            )}
          </div>

          {/* 동의 항목 */}
          <div className="pt-2 space-y-3">
            <label className="flex items-center gap-3 bg-white/5 border border-white/15 rounded-xl px-4 py-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allChecked}
                onChange={toggleAll}
                className="w-5 h-5 flex-none accent-[#C41E3A] cursor-pointer"
              />
              <span className="text-white font-semibold text-sm">전체 동의</span>
            </label>

            <ConsentItem
              checked={privacyConsent}
              onChange={(v) => {
                setPrivacyConsent(v);
                if (v) setErrors((e) => ({ ...e, privacy: undefined }));
              }}
              content={privacyConsentText}
              required
            />
            <ConsentItem
              checked={marketingConsent}
              onChange={setMarketingConsent}
              content={marketingConsentText}
            />
            {errors.privacy && <p className="text-red-400 text-xs">{errors.privacy}</p>}
          </div>
        </form>
      </div>

      {/* 버튼 */}
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="px-6 py-3 border border-white/20 text-white/70 rounded-full hover:border-white/40 hover:text-white transition-colors disabled:opacity-30"
        >
          ← 이전
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting || !privacyConsent}
          className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              전송 중...
            </>
          ) : (
            '결과 보기 →'
          )}
        </button>
      </div>
    </motion.div>
  );
}

interface ConsentItemProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  content: { title: string; rows: readonly (readonly [string, string])[]; refusal: string };
  required?: boolean;
}

function ConsentItem({ checked, onChange, content, required }: ConsentItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-1">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-label={content.title}
          className="w-5 h-5 mt-0.5 flex-none accent-[#C41E3A] cursor-pointer"
        />
        <button
          type="button"
          onClick={() => onChange(!checked)}
          className="flex-1 text-left text-sm text-white/80"
        >
          <span className={required ? 'text-[#ff6b6b] font-semibold' : 'text-white/50 font-semibold'}>
            {content.title.slice(0, 4)}
          </span>
          {content.title.slice(4)}
        </button>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="text-white/40 hover:text-white text-xs underline underline-offset-2 flex-none"
        >
          {open ? '닫기' : '보기'}
        </button>
      </div>
      {open && (
        <div className="mt-2 ml-8 bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white/60 leading-relaxed">
          <table className="w-full">
            <tbody>
              {content.rows.map(([k, v]) => (
                <tr key={k}>
                  <td className="pr-3 py-1 align-top text-white/40 whitespace-nowrap">{k}</td>
                  <td className="py-1">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-white/40">{content.refusal}</p>
        </div>
      )}
    </div>
  );
}
