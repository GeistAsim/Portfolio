import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import * as Icons from 'lucide-react';

const Skills = ({ data }) => {
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
            {data.categories.map((category, index) => {
              const CategoryIcon = Icons[category.icon_name];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {CategoryIcon && <CategoryIcon className="h-6 w-6" />}
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
              );
            })}
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-center mb-8">Key Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.key_strengths.map((highlight, index) => {
                const HighlightIcon = Icons[highlight.icon_name];
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        {HighlightIcon && <HighlightIcon className="h-8 w-8 text-primary" />}
                      </div>
                      <h4 className="mb-3">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
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
                {data.currently_learning.map((skill, index) => (
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
