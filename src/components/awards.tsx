import { Trophy } from 'lucide-react';

export function Awards() {
  return (
    <section id="awards" className="w-full py-16 md:py-24">
      <div className="container mx-auto animate-fade-in-up">
        <div className="flex flex-col items-center text-center">
            <h2 className="mb-12 mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Awards & Recognition
            </h2>
            <div className="inline-flex items-center gap-4 rounded-lg bg-card p-6 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Trophy className="h-8 w-8" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Merit-based Benevolent Scholarship</h3>
                    <p className="text-muted-foreground">Punjab Government (2018–Present)</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
