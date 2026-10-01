import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Ambassador Team Leader",
      company: "SkillBridge Institute of Technology",
      location: "Remote",
      period: "2025 - Present",
      type: "Volunteer Leadership",
      description:
        "Leading a team of ambassadors to promote technology learning initiatives, organize workshops, and mentor students in coding and problem-solving.",
      achievements: [
        "Built a vibrant community of learners and developers",
        "Organized coding sessions and technology awareness events",
        "Mentored peers in Data Structures & Algorithms and web development",
      ],
      technologies: [
        "Leadership",
        "Team Management",
        "Public Speaking",
        "Technical Mentorship",
      ],
    },
    {
      title:
        "Hospital Management System Developer (Collaborative Project)",
      company: "Independent Collaboration",
      location: "Debre Berhan, Ethiopia",
      period: "2024",
      type: "Project-Based",
      description:
        "Worked with a team to design and develop a hospital management system using MS Access. Built relational databases and user-friendly forms to improve hospital workflows.",
      achievements: [
        "Designed and implemented a relational database for patient, staff, and ambulance records",
        "Created intuitive forms for patient registration, employee management, and blood donation tracking",
        "Reduced hospital registration time significantly by streamlining data entry and retrieval",
      ],
      technologies: [
        "MS Access",
        "VBA (Visual Basic for Applications)",
        "Database Design",
        "UI Forms",
      ],
    },
    {
      title: "Independent Software Developer",
      company: "Self-Learning & Freelance Projects",
      location: "Debre Berhan, Ethiopia",
      period: "2020 - Present",
      type: "Independent",
      description:
        "Built multiple personal and collaborative software projects while self-learning full-stack web development and modern programming practices.",
      achievements: [
        "Developed a modern Chef AI system with real-time analytics and a user-friendly dashboard",
        "Designed and deployed responsive portfolio websites and practical business applications for local users",
        "Implemented version control and automated deployment workflows using Git, Vercel, and Netlify",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Git & GitHub",
      ],
    },
  ];

  const education = [
    {
      degree:
        "Bachelor of Science in Electrical and Computer Engineering",
      school: "Addis Ababa University",
      location: "Addis Ababa, Ethiopia",
      period: "2023 - Present",
      description:
        "Pursuing a degree focused on the design and development of electrical systems, embedded hardware, and computer architecture.",
      relevant: [
        "Digital Logic Design",
        "Microprocessors & Embedded Systems",
        "Signals & Systems",
        "Control Systems",
        "Circuit Analysis & Design",
      ],
    },
    {
      degree: "Data Structures & Algorithms",
      school: "SkillBridge Institute of Technology",
      location: "Online",
      period: "2025 - Present",
      description:
        "Learning advanced data structures and algorithms to write efficient and optimized code for solving complex problems.",
      relevant: [
        "Algorithm Analysis",
        "Sorting & Searching Algorithms",
        "Dynamic Programming",
        "Graph Algorithms",
      ],
    },
    {
      degree: "Machine Learning & Artificial Intelligence",
      school: "AWS Educate",
      location: "Online",
      period: "2024 - Present",
      description:
        "Focused on mastering machine learning and AI fundamentals using AWS services and tools to build intelligent applications.",
      relevant: [
        "Machine Learning Fundamentals",
        "Deep Learning with AWS",
        "Data Preprocessing & Model Training",
        "AI Services (AWS SageMaker, Rekognition, Lex)",
      ],
    },
    {
      degree: "Self-Taught Software Development",
      school: "Independent Learning",
      location: "Debre Berhan, Ethiopia",
      period: "2020 - Present",
      description:
        "Learning and applying modern web technologies to build real-world software solutions, complementing my hardware knowledge.",
      relevant: [
        "Full-Stack Web Development (React, Node.js)",
        "Database Systems (SQL, MongoDB)",
        "Version Control (Git & GitHub)",
        "Building and deploying web applications",
      ],
    },
  ];

  const certifications = [
    "Scrimba: Learn React",
    "Udacity Nanodegree: Programming Fundamentals",
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Experience &amp; Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My professional journey and continuous learning
              path in software development.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl mb-8">
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl">
                        {exp.title}
                      </CardTitle>
                      <Badge variant="outline">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map(
                          (achievement, achieveIndex) => (
                            <li key={achieveIndex}>
                              {achievement}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(
                        (tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                    <div>
                      <h4 className="mb-2">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map(
                          (course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="secondary"
                            >
                              {course}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-8">
              Certifications
            </h3>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                    >
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;