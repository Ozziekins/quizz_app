'use client';
import Score from '@/components/Score';
import { useSearchParams } from 'next/navigation';

export default function ScorePage() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get('score') || '0', 10);
  const total = parseInt(searchParams.get('total') || '0', 10);

  return <Score score={score} total={total} />;
}
