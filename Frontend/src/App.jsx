import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './components/icons';
import portfolioData from './data/portfolio.json';

export default function App() {
  const { hero } = portfolioData;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navigation />
        <main>
          <Hero data={portfolioData.hero} />
          <About data={portfolioData.about} />
          <Skills data={portfolioData.skills} />
          <Projects data={portfolioData.projects} />
          <Experience data={portfolioData.experience} />
          <Contact data={portfolioData.contact} />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl mb-4">{hero.name}</h3>
                  <p className="text-primary-foreground/80 mb-4">
                    {hero.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={hero.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={hero.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${hero.socials.email}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-primary-foreground/80">
                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("about")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            })
                        }
                        className="hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        About Me
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("projects")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            })
                        }
                        className="hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("skills")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            })
                        }
                        className="hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            })
                        }
                        className="hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4">Services</h4>
                  <ul className="space-y-2 text-primary-foreground/80">
                    <li>Full Stack Developer</li>
                    <li>Distributed Systems</li>
                    <li>Database Managment System</li>
                    <li>Cloud Architect</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-primary-foreground/20 pt-8 text-center">
                <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
                  Made with{" "}
                  <Heart className="h-4 w-4 text-red-400" /> by
                  {hero.name} © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
