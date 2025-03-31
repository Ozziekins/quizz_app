import Quiz from '@/components/Quiz';

interface QuizPageProps {
  params: { category: string };
  searchParams?: { amount?: string };
}

export default function QuizPage({ params, searchParams }: QuizPageProps) {
  const amount = parseInt(searchParams?.amount || '10', 10);
  const category = params.category;

  return <Quiz category={category} amount={amount} />;
}
