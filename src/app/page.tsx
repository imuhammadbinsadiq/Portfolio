import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Footer } from '@/components/footer';
import { Education } from '@/components/education';
import { Certifications } from '@/components/certifications';
import { Awards } from '@/components/awards';
import { SoftwareProficiency } from '@/components/software-proficiency';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-col flex-1 px-4 sm:px-6 lg:px-8">
        <Hero />
        <Education />
        <Certifications />
        <Awards />
        <SoftwareProficiency />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
