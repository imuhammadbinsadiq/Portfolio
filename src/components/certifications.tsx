import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ArrowRight } from 'lucide-react';

const certificationsData = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    link: 'https://coursera.org/share/8027d1e803c8d3e42a668f752aab12f1',
  },
  {
    title: 'Data Science Specialization',
    issuer: 'IBM',
    link: 'https://coursera.org/share/3a13e0d00232b4f730076b8e8e02c703',
  },
  {
    title: 'Data Science Fundamentals with Python and SQL Specialization',
    issuer: 'IBM',
    link: 'https://coursera.org/share/583692cc3c933f068b65c94464c917cb',
  },
  {
    title: 'Microsoft Power BI Data Analyst Specialization',
    issuer: 'Microsoft',
    link: 'https://coursera.org/share/c2694cd8d866583e511136724f48bb5a',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-16 md:py-24">
      <div className="container mx-auto animate-fade-in-up">
        <h2 className="mb-12 mt-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Certifications & Learning
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificationsData.map((cert, index) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className="group">
              <Card className="flex h-full flex-col transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:border-primary/30">
                <CardHeader className="flex-grow">
                  <div className="flex items-start gap-4">
                     <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Award className="h-6 w-6" />
                     </div>
                     <div>
                        <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                        <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                     </div>
                  </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center text-sm font-medium text-primary">
                      View Certificate
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
