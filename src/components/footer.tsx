import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-border/40 bg-background py-6 text-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row md:px-6">
        <div className="text-center text-sm text-muted-foreground sm:text-left">
          <span>© {new Date().getFullYear()} Muhammad Bin Sadiq. All Rights Reserved.</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/90 hover:text-primary-foreground">
            <a href="https://github.com/imuhammadbinsadiq" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/90 hover:text-primary-foreground">
            <a href="https://linkedin.com/in/muhammed-sadiq-b-s-a03577172" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
