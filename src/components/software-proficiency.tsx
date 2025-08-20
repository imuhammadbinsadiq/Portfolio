import { Code, Database, FileSpreadsheet, Notebook, BarChart } from 'lucide-react';

const software = [
    { name: 'VS Code', icon: <Code className="h-10 w-10" /> },
    { name: 'Jupyter Notebook', icon: <Notebook className="h-10 w-10" /> },
    { name: 'Excel', icon: <FileSpreadsheet className="h-10 w-10" /> },
    { name: 'Power BI', icon: <BarChart className="h-10 w-10" /> },
    { name: 'MySQL', icon: <Database className="h-10 w-10" /> },
];

export function SoftwareProficiency() {
  return (
    <section id="software-proficiency" className="w-full py-16 md:py-24">
      <div className="container mx-auto animate-fade-in-up">
        <h2 className="mb-12 mt-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Software Proficiency
        </h2>
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 md:grid-cols-5">
          {software.map((tool) => (
            <div key={tool.name} className="group flex flex-col items-center gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-card hover:shadow-lg">
              <div className="text-primary transition-transform duration-300 group-hover:scale-110">{tool.icon}</div>
              <p className="font-semibold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
