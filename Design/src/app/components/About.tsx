import { Card, CardContent } from "./ui/card";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Player",
      description:
        "Collaborative approach to development with strong communication and leadership skills.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solver",
      description:
        "Creative thinking and analytical skills to tackle complex technical challenges.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results Driven",
      description:
        "Focused on delivering high-quality solutions that meet business objectives.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I’m a passionate software developer and electrical
              engineering student with a strong track record of
              building innovative web applications and systems
              that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey into software development began
                  during my early studies, where I discovered my
                  passion for coding and creating solutions that
                  make an impact. Since then, I’ve worked on a
                  variety of projects, including a hospital
                  management system and a modern attendance
                  tracking app, leading teams and delivering
                  results that simplify complex processes.
                </p>
                <p>
                  Over the years, I’ve earned recognition for my
                  academic excellence, including being one of
                  the top students in my country and
                  contributing to my community through volunteer
                  work and ICT initiatives. I’m driven by
                  continuous learning and staying ahead with the
                  latest technologies and best practices in both
                  software and hardware domains. I believe in
                  continuous learning and staying up-to-date
                  with the latest technologies and best
                  practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring
                  new technologies, contributing to open-source
                  projects, or sharing knowledge with the
                  developer community through blog posts and
                  mentoring.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 text-center">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl">3+</h4>
                  <p className="text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl">10+</h4>
                  <p className="text-muted-foreground">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl">15+</h4>
                  <p className="text-muted-foreground">
                    Technologies Mastered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;