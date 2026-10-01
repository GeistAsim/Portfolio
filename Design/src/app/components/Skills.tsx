import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch, 
  Palette, 
  Shield,
  Cloud,
  Layout
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 80, color: "bg-gray-800" },
        { name: "Vue.js", level: 40, color: "bg-green-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "Python", level: 80, color: "bg-yellow-500" },
        { name: "REST APIs", level: 90, color: "bg-purple-500" },
        { name: "GraphQL", level: 70, color: "bg-pink-500" }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-700" },
        { name: "Firebase", level: 40, color: "bg-orange-600" },
        { name: "MySQL", level: 75, color: "bg-blue-800" }
      ]
    },
    
    {
      title: "Tools & Others",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 95, color: "bg-orange-700" },
        { name: "Vite", level: 85, color: "bg-blue-400" },
        { name: "Figma", level: 75, color: "bg-purple-400" },
        { name: "Canvas", level: 60, color: "bg-green-500" }
      ]
    }
  ];

  const highlights = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Responsive Design",
      description: "Creating beautiful, mobile-first interfaces that work seamlessly across all devices."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security First",
      description: "Implementing robust security measures and best practices in every application."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      title: "Version Control",
      description: "Expert in Git workflows, branching strategies, and collaborative development."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Focus",
      description: "Strong eye for design with experience in creating intuitive user experiences."
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Skills &amp; Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across 
              different technologies and frameworks.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-center mb-8">Key Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {highlight.icon}
                    </div>
                    <h4 className="mb-3">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Learning */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Currently Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                I'm always expanding my skillset. Here's what I'm currently focusing on:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Machine Learning",
                  "Rust",
                  "Cloud",
                  "Python",
                  "AI/ML Integration"
                ].map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;