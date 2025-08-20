import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, BrainCircuit, Users, Paintbrush, Code, Database, BarChart, Mic, PenTool } from 'lucide-react';

const skillsData = {
    'Programming Languages': {
        icon: <Code className="h-6 w-6" />,
        skills: ['Python', 'R', 'SQL']
    },
    'Data Analysis & Visualization': {
      icon: <BarChart className="h-6 w-6" />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI']
    },
    'Machine Learning': {
      icon: <BrainCircuit className="h-6 w-6" />,
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost']
    },
    'Deep Learning': {
        icon: <Zap className="h-6 w-6" />,
        skills: ['CNN', 'RNN', 'GANs', 'Autoencoders']
    },
    'Soft Skills': {
      icon: <Users className="h-6 w-6" />,
      skills: ['Communication', 'Collaboration', 'Problem-Solving', 'Critical Thinking', 'Teamwork', 'Decision-Making', 'People Management', 'Emotional Intelligence']
    },
    'Other': {
        icon: <PenTool className="h-6 w-6" />,
        skills: ['AI Ethics', 'Creativity']
    }
  };

export function Skills() {
  return (
    <section id="skills" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto animate-fade-in-up">
        <h2 className="mb-12 mt-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Professional Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, data]) => (
            <Card key={category} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {data.icon}
                </div>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-pointer px-3 py-1 text-sm transition-transform hover:scale-105 hover:bg-primary/80 hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
