
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Menu, MessageSquare } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (observer.current) {
          observer.current.unobserve(section);
        }
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(href);
    if(isOpen) {
        setIsOpen(false);
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex items-center">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="mr-2 flex items-center justify-center gap-2"
          >
            <Code className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Muhammad</span>
          </a>
        </div>
        <nav className="flex-1 items-center space-x-2 sm:space-x-4 hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "px-2 py-1 text-sm font-medium transition-colors hover:text-primary",
                activeLink === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden sm:flex">
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Let's Collaborate
            </a>
          </Button>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/90 hover:text-primary-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 py-4">
                   <a
                    href="#about"
                    onClick={(e) => handleLinkClick(e, '#about')}
                    className="mr-2 flex items-center justify-center gap-2 self-start"
                    >
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold">Muhammad</span>
                  </a>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                         className={cn(
                            "block px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                            activeLink === link.href ? "text-primary" : "text-foreground"
                         )}
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                   <Button asChild className="mt-4">
                    <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Let's Collaborate
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
