import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Credex AI Spend Audit
        </h1>

        <p className="text-lg text-gray-600">
          Analyze AI tool spending and identify cost-saving opportunities for teams.
        </p>

        <Button size="lg">
          Start Audit
        </Button>
      </div>
    </main>
  );
}