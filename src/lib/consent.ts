// 설문 정보 입력 단계의 동의 문구 · 메일 표시용 공통 모듈
// 문구를 바꿀 때는 CONSENT_VERSION 날짜도 함께 바꿔주세요 (어떤 문구에 동의했는지 기록용).
export const CONSENT_VERSION = '2026-11-06';

export const privacyConsentText = {
  title: '[필수] 개인정보 수집·이용 동의',
  rows: [
    ['수집 항목', '이름, 연락처, 설문 응답 내용'],
    ['수집·이용 목적', '진단 결과 전달, 교육·관리 상담 연락'],
    ['보유·이용 기간', '상담 종료 후 1년까지 보관 후 파기 (동의 철회 시 즉시 파기)'],
  ] as const,
  refusal:
    '동의를 거부하실 수 있으나, 거부 시 진단 결과 전달과 상담 연락이 어렵습니다.',
};

export const marketingConsentText = {
  title: '[선택] 광고성 정보 수신 동의',
  rows: [
    ['수신 방법', '카카오톡, 문자(SMS/LMS)'],
    ['내용', '무료 설명회·세미나, 교육 일정, 할인·이벤트, 신규 과정 안내'],
    ['보유·이용 기간', '동의 철회 시까지 (2년마다 수신 동의 여부 재확인)'],
  ] as const,
  refusal:
    '동의하지 않아도 진단 결과는 받으실 수 있습니다. 수신 동의는 언제든지 철회할 수 있습니다.',
};

export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** 알림 메일에 넣을 동의 내역 블록 */
export function consentEmailBlock(marketingConsent: boolean, consentedAt: string): string {
  const at = consentedAt
    ? new Date(consentedAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    : '-';
  const badge = (ok: boolean, yes: string, no: string) =>
    `<span style="background:${ok ? '#1d7a4d' : '#888'}; color:#fff; border-radius:20px; padding:2px 10px; font-size:11px; font-weight:700;">${ok ? yes : no}</span>`;
  return `
      <h2 style="font-size:15px; color:#333; margin:0 0 12px; border-bottom:1px solid #eee; padding-bottom:10px;">동의 내역</h2>
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        <tr>
          <td style="padding:6px 0; color:#666; font-size:12px; width:130px;">개인정보 수집·이용</td>
          <td style="padding:6px 0; font-size:12px;">${badge(true, '동의 (필수)', '')}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; color:#666; font-size:12px;">광고성 정보 수신</td>
          <td style="padding:6px 0; font-size:12px;">${badge(marketingConsent, '동의 · 카톡/문자 발송 가능', '미동의 · 광고 발송 금지')}</td>
        </tr>
        <tr>
          <td style="padding:6px 0; color:#666; font-size:12px;">동의 시각 / 문구 버전</td>
          <td style="padding:6px 0; color:#111; font-size:12px;">${escapeHtml(at)} / v${CONSENT_VERSION}</td>
        </tr>
      </table>`;
}
