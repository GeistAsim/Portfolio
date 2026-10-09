import { Card, CardContent } from "./ui/card";
import * as Icons from "lucide-react";

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                {data.journey_paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-lg p-8 text-center">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl">{data.years_experience}</h4>
                  <p className="text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl">{data.projects_completed}</h4>
                  <p className="text-muted-foreground">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl">{data.technologies_mastered}</h4>
                  <p className="text-muted-foreground">
                    Technologies Mastered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.highlights.map((item, index) => {
              const Icon = Icons[item.icon_name];
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {Icon && <Icon className="h-8 w-8 text-primary" />}
                    </div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
