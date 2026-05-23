import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const intentEmoji: Record<string, string> = {
  enroll: '🔥',
  inquiry: '📅',
  browse: '💬',
  'instructor-path': '🎓',
};

const intentKorean: Record<string, string> = {
  enroll: '등록 의향',
  inquiry: '일정·비용 확인',
  browse: '탐색 중',
  'instructor-path': '강사 가능 여부',
};

const trackKorean: Record<string, string> = {
  bbtt: 'BBTT 바디밸런스',
  headspa: '헤드스파',
  plasma: '플라즈마',
  instructor: '강사 양성',
  undecided: '미정',
};

const levelKorean: Record<string, string> = {
  intro: '입문',
  regular: '정규',
  master: '마스터',
  any: '상담',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name, phone,
      field, interest, goal, experience, priority, format, intentLabel,
      intent, track, level, tone, courseId,
      courseTitle, courseSubtitle, courseDescription, coursePrograms,
      totals,
    } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: '이름과 연락처는 필수입니다.' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'kcd4232@naver.com';

    const emoji = intentEmoji[intent] || '📋';
    const intentKo = intentKorean[intent] || intent;
    const trackKo = trackKorean[track] || track;
    const levelKo = levelKorean[level] || level;

    const subject = `[성장진단·${emoji} ${intentKo}] ${name} 고객님 — ${trackKo}/${levelKo} · ${courseTitle}`;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('[Growth Email] SMTP not configured. Growth diagnosis data:', {
        name, phone, intent, track, level, tone, courseId,
      });
      return NextResponse.json({ success: true, message: 'SMTP not configured (dev mode)' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587'),
      secure: parseInt(smtpPort || '587') === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    const buildProgramsList = (programs: string[] | undefined) =>
      Array.isArray(programs)
        ? programs.map((p) => `<li style="padding:4px 0; font-size:13px; color:#444;">${p}</li>`).join('')
        : '';

    const buildScoreBar = (label: string, score: number, color: string) => {
      const pct = Math.min(100, Math.round((score / 10) * 100));
      return `
        <div style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
            <span style="color:#666;">${label}</span>
            <span style="color:#111; font-weight:600;">${score}점</span>
          </div>
          <div style="background:#eee; border-radius:99px; height:6px; overflow:hidden;">
            <div style="width:${pct}%; height:100%; background:${color}; border-radius:99px;"></div>
          </div>
        </div>`;
    };

    const html = `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"></head>
<body style="font-family: 'Apple SD Gothic Neo', sans-serif; background:#f4f4f4; padding:20px;">
  <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#0A1628; padding:24px; text-align:center;">
      <h1 style="color:#fff; margin:0; font-size:20px;">🎓 전문가 성장 진단 알림</h1>
      <p style="color:rgba(255,255,255,0.6); margin:8px 0 0; font-size:13px;">${now}</p>
    </div>
    <div style="padding:28px;">

      <h2 style="font-size:15px; color:#333; margin:0 0 12px; border-bottom:1px solid #eee; padding-bottom:10px;">고객 정보</h2>
      <table style="width:100%; border-collapse:collapse; margin-bottom:28px;">
        <tr>
          <td style="padding:7px 0; color:#666; font-size:13px; width:80px;">이름</td>
          <td style="padding:7px 0; color:#111; font-size:13px; font-weight:600;">${name}</td>
        </tr>
        <tr>
          <td style="padding:7px 0; color:#666; font-size:13px;">연락처</td>
          <td style="padding:7px 0; color:#111; font-size:13px; font-weight:600;">${phone}</td>
        </tr>
        <tr>
          <td style="padding:7px 0; color:#666; font-size:13px;">등록 의향</td>
          <td style="padding:7px 0; font-size:13px;">
            <span style="background:#C41E3A; color:#fff; border-radius:20px; padding:2px 10px; font-size:11px; font-weight:700;">${emoji} ${intentKo}</span>
          </td>
        </tr>
      </table>

      <h2 style="font-size:15px; color:#333; margin:0 0 12px; border-bottom:1px solid #eee; padding-bottom:10px;">추천 결과</h2>
      <div style="background:#f0f4f8; border-radius:10px; padding:16px; margin-bottom:20px;">
        <div style="font-size:12px; color:#666; margin-bottom:4px;">추천 과정</div>
        <div style="font-size:18px; font-weight:700; color:#0A1628;">${courseTitle || ''}</div>
        <div style="font-size:12px; color:#888; margin-top:4px;">${courseSubtitle || ''}</div>
        <div style="margin-top:10px; font-size:13px; color:#555; line-height:1.7;">${courseDescription || ''}</div>
      </div>

      <p style="font-size:12px; color:#888; font-weight:600; margin:0 0 6px; text-transform:uppercase; letter-spacing:0.5px;">커리큘럼</p>
      <ul style="margin:0 0 24px; padding-left:18px;">${buildProgramsList(coursePrograms)}</ul>

      <h2 style="font-size:15px; color:#333; margin:0 0 12px; border-bottom:1px solid #eee; padding-bottom:10px;">트랙 적합도 분석</h2>
      <div style="margin-bottom:24px;">
        ${buildScoreBar('BBTT 바디밸런스', totals?.bbtt || 0, '#0A1628')}
        ${buildScoreBar('헤드스파', totals?.headspa || 0, '#1a5c8a')}
        ${buildScoreBar('플라즈마', totals?.plasma || 0, '#6b21a8')}
        ${buildScoreBar('강사 양성', totals?.instructor || 0, '#C41E3A')}
      </div>

      <h2 style="font-size:15px; color:#333; margin:0 0 12px; border-bottom:1px solid #eee; padding-bottom:10px;">7개 질문 응답</h2>
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        ${[
          ['Q1 활동 분야', field],
          ['Q2 관심 교육', interest],
          ['Q3 목표', goal],
          ['Q4 경력', experience],
          ['Q5 중요 가치', priority],
          ['Q6 선호 형태', format],
          ['Q7 참여 의향', intentLabel],
        ].map(([q, a]) => `
        <tr>
          <td style="padding:6px 0; color:#666; font-size:12px; width:110px; vertical-align:top;">${q}</td>
          <td style="padding:6px 0; color:#111; font-size:12px;">${a || '-'}</td>
        </tr>`).join('')}
      </table>

      <div style="background:#fff8e1; border-left:4px solid #C41E3A; padding:12px 16px; border-radius:0 8px 8px 0;">
        <p style="margin:0; font-size:13px; color:#555;">상담 연락처: <strong>${phone}</strong> (${name} 고객님)</p>
      </div>
    </div>
    <div style="background:#f4f4f4; padding:16px; text-align:center;">
      <p style="margin:0; font-size:12px; color:#999;">COSMICO KOREA 전문가 성장 진단 시스템</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"COSMICO 성장진단" <${smtpUser}>`,
      to: notificationEmail,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Growth Email] Error:', error);
    return NextResponse.json({ success: false, error: 'Email send failed' }, { status: 500 });
  }
}
