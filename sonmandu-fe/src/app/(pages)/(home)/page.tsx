'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <span>메인 페이지</span>
      <Link href={'/font-stories'}>폰트 이야기로 가기</Link>
    </div>
  );
}
