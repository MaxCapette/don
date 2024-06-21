import UselessCard from "@/components/ui/uselessCard";
import { uselessFacts } from "@/datas/facts";

export default function FactPage({ params }: { params: { id: string } }) {
  console.log(params);

  const currentFact = uselessFacts.find((p) => p.id === parseInt(params.id));

  console.log(currentFact);
  if (!currentFact) {
    return <div>Fact not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40">
      <UselessCard
        key={currentFact.id}
        fact={currentFact.fact}
        imageUrl="/images/fsdfsdf.jpeg"
      />
      {currentFact.fact}
    </main>
  );
}
