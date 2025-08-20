import { Mail, Phone, Linkedin, Github, User } from 'lucide-react';
import { Card } from '@/components/ui/card';


const contactInfo = [
  { icon: <Mail className="h-6 w-6" />, text: 'muhammadbinsadiq6@gmail.com', href: 'mailto:muhammadbinsadiq6@gmail.com', label: "Email" },
  { icon: <Phone className="h-6 w-6" />, text: '+92-326-5072174', href: 'tel:+923265072174', label: "Phone" },
  { icon: <Linkedin className="h-6 w-6" />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/iammuhammadbinsadiq', label: "LinkedIn" },
  { icon: <Github className="h-6 w-6" />, text: 'GitHub', href: 'https://github.com/imuhammadbinsadiq', label: "GitHub" },
  { icon: <User className="h-6 w-6" />, text: 'Credly', href: 'https://www.credly.com/users/muhammad-bin-sadiq', label: "Credly" },
];


export function Contact() {
  return (
    <section id="contact" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto animate-fade-in-up px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 mt-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Me
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {contactInfo.map((item, index) => (
                 <a 
                    key={index}
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                >
                    <Card className="flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{item.label}</h3>
                      <p className="text-sm text-muted-foreground break-all">{item.text}</p>
                    </Card>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
}
