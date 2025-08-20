'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const ROLES = ['Machine Learning Enthusiast', 'Data Analyst', 'Full Stack Developer'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY_BETWEEN_ROLES = 2000;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_ROLES);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="about" className="container grid min-h-[calc(100vh-3.5rem)] grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:py-24">
      <div className="flex flex-col items-center text-center md:items-start md:text-left animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Muhammad Bin Sadiq
        </h1>
        <div className="mt-4 h-9 text-2xl font-medium tracking-tight text-primary sm:text-3xl">
          <span>{text}</span>
          <span className="animate-ping">|</span>
        </div>
        
        <div className="mt-8 animate-fade-in-up [animation-delay:300ms]">
          <h3 className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl">Professional Summary</h3>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Aspiring Data Scientist with a strong foundation in machine learning, deep learning, and data analytics. Eager to develop predictive models, perform complex data analysis, and deliver actionable insights. Proficient in Python, R, SQL, and data visualization tools such as Power BI and Tableau. Enthusiastic about working in fast-paced environments and driving process improvements.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button size="lg" asChild>
                <a href="#contact">
                    Contact Me
                </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:bg-primary/90 hover:text-primary-foreground">
                <a href="#projects">
                    View My Work <ArrowDown className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
      </div>
      <div className="relative hidden h-full w-full items-center justify-center md:flex animate-fade-in-up [animation-delay:200ms]">
        <div className="absolute inset-0 z-0 m-auto h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <Image
          src="/Image.jpeg"
          alt="Muhammad Bin Sadiq"
          width={450}
          height={450}
          className="relative z-10 rounded-full"
          priority
          data-ai-hint="portrait person"
        />
      </div>
    </section>
  );
}
