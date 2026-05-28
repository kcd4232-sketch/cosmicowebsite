import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.headspabbtt.com';

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>윤소연 원장 | COSMICO KOREA</title>
    <link>${BASE_URL}</link>
    <description>BBTT · Head Spa · Plasma 전문 마사지 테라피스트 겸 강사 윤소연 원장</description>
    <language>ko</language>
    <atom:link href="${BASE_URL}/api/rss" rel="self" type="application/rss+xml"/>
    <item>
      <title>BBTT 워크숍 화성</title>
      <link>${BASE_URL}/projects/bbtt-workshop-hwaseong</link>
      <description>BBTT 바디밸런스 테크니컬 트레이닝 워크숍 화성 진행</description>
      <guid>${BASE_URL}/projects/bbtt-workshop-hwaseong</guid>
    </item>
    <item>
      <title>몽골 BBTT 세미나 2026</title>
      <link>${BASE_URL}/projects/mongolia-bbtt-seminar-2026</link>
      <description>몽골 BBTT 세미나 2026 진행</description>
      <guid>${BASE_URL}/projects/mongolia-bbtt-seminar-2026</guid>
    </item>
    <item>
      <title>부산 세미나</title>
      <link>${BASE_URL}/projects/busan-seminar</link>
      <description>부산 세미나 진행</description>
      <guid>${BASE_URL}/projects/busan-seminar</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
