import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto animate-fade-in-up">
        <div className="flex flex-col items-center text-center">
            <h2 className="mb-12 mt-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold md:text-2xl">BS in Computer Science</h3>
                <p className="text-muted-foreground">University of Engineering and Technology, Taxila (2022–2026)</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
