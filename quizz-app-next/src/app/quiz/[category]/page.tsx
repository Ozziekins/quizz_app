import Quiz from "@/components/Quiz";

// biome-ignore lint/suspicious/noExplicitAny: needed for Next.js dynamic routing
export default function Page(props: any) {
	const { params, searchParams } = props;
	const amount = Number.parseInt(searchParams?.amount || "10", 10);
	return <Quiz category={params.category} amount={amount} />;
}
