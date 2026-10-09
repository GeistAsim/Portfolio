from pydantic import BaseModel, HttpUrl, EmailStr, Field
from typing import List, Optional

class SocialLinks(BaseModel):
    github: str
    linkedin: str
    twitter: str
    email: str

class HeroData(BaseModel):
    name: str
    role: str
    bio: str
    resume_link: str
    socials: SocialLinks

class Highlight(BaseModel):
    title: str
    description: str
    icon_name: str

class AboutData(BaseModel):
    title: str
    description: str
    journey_paragraphs: List[str]
    years_experience: str
    projects_completed: str
    technologies_mastered: str
    highlights: List[Highlight]

class Skill(BaseModel):
    name: str
    level: int
    color: str

class SkillCategory(BaseModel):
    title: str
    icon_name: str
    skills: List[Skill]

class SkillsData(BaseModel):
    categories: List[SkillCategory]
    key_strengths: List[Highlight]
    currently_learning: List[str]

class ProjectLinks(BaseModel):
    live: Optional[str] = None
    github: str

class Project(BaseModel):
    id: int
    title: str
    description: str
    image: str
    category: str
    technologies: List[str]
    features: List[str]
    links: ProjectLinks
    status: str
    featured: bool

class ExperienceItem(BaseModel):
    title: str
    company: str
    location: str
    period: str
    type: str
    description: str
    achievements: List[str]
    technologies: List[str]

class EducationItem(BaseModel):
    degree: str
    school: str
    location: str
    period: str
    description: str
    relevant: List[str]

class ExperienceData(BaseModel):
    work: List[ExperienceItem]
    education: List[EducationItem]
    certifications: List[str]

class ContactInfo(BaseModel):
    email: str
    phone: str
    location: str

class PortfolioData(BaseModel):
    hero: HeroData
    about: AboutData
    skills: SkillsData
    projects: List[Project]
    experience: ExperienceData
    contact: ContactInfo

# ==========================================
# Data Instantiation
# ==========================================

portfolio_data = PortfolioData(
    hero=HeroData(
        name="Asim Saifi",
        role="Software Developer",
        bio="Passionate about creating innovative web applications and solving complex problems with clean, efficient code. Specializing in React, Node.js, and modern web technologies.",
        resume_link="https://drive.google.com/uc?export=download&id=1crrOHNxQ95VJ9fNAL4X45xM8kiiXF2zw",
        socials=SocialLinks(
            github="https://github.com/dag12y",
            linkedin="https://www.linkedin.com/in/dagm-yibabe-46b85b353/",
            twitter="https://x.com/Dagm0852389280?t=I0AFervOaxY1izTAy-3P_A&s=09",
            email="dagimyibabe19@gmail.com"
        )
    ),
    about=AboutData(
        title="About Me",
        description="I'm a passionate software developer and electrical engineering student with a strong track record of building innovative web applications and systems that solve real-world problems.",
        journey_paragraphs=[
            "My journey into software development began during my early studies, where I discovered my passion for coding and creating solutions that make an impact. Since then, I've worked on a variety of projects, including a hospital management system and a modern attendance tracking app, leading teams and delivering results that simplify complex processes.",
            "Over the years, I've earned recognition for my academic excellence, including being one of the top students in my country and contributing to my community through volunteer work and ICT initiatives. I'm driven by continuous learning and staying ahead with the latest technologies and best practices in both software and hardware domains. I believe in continuous learning and staying up-to-date with the latest technologies and best practices.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring."
        ],
        years_experience="3+",
        projects_completed="10+",
        technologies_mastered="15+",
        highlights=[
            Highlight(title="Clean Code", description="Writing maintainable, scalable, and well-documented code that stands the test of time.", icon_name="Code"),
            Highlight(title="Team Player", description="Collaborative approach to development with strong communication and leadership skills.", icon_name="Users"),
            Highlight(title="Problem Solver", description="Creative thinking and analytical skills to tackle complex technical challenges.", icon_name="Lightbulb"),
            Highlight(title="Results Driven", description="Focused on delivering high-quality solutions that meet business objectives.", icon_name="Target")
        ]
    ),
    skills=SkillsData(
        categories=[
            SkillCategory(
                title="Frontend Development",
                icon_name="Globe",
                skills=[
                    Skill(name="React", level=95, color="bg-blue-500"),
                    Skill(name="TypeScript", level=90, color="bg-blue-600"),
                    Skill(name="Next.js", level=80, color="bg-gray-800"),
                    Skill(name="Vue.js", level=40, color="bg-green-500"),
                    Skill(name="HTML/CSS", level=95, color="bg-orange-500"),
                    Skill(name="Tailwind CSS", level=90, color="bg-teal-500")
                ]
            ),
            SkillCategory(
                title="Backend Development",
                icon_name="Server",
                skills=[
                    Skill(name="Node.js", level=90, color="bg-green-600"),
                    Skill(name="Express.js", level=85, color="bg-gray-700"),
                    Skill(name="Python", level=80, color="bg-yellow-500"),
                    Skill(name="REST APIs", level=90, color="bg-purple-500"),
                    Skill(name="GraphQL", level=70, color="bg-pink-500")
                ]
            ),
            SkillCategory(
                title="Database & Storage",
                icon_name="Database",
                skills=[
                    Skill(name="PostgreSQL", level=85, color="bg-blue-700"),
                    Skill(name="MongoDB", level=80, color="bg-green-700"),
                    Skill(name="Firebase", level=40, color="bg-orange-600"),
                    Skill(name="MySQL", level=75, color="bg-blue-800")
                ]
            ),
            SkillCategory(
                title="Tools & Others",
                icon_name="Code",
                skills=[
                    Skill(name="Git", level=95, color="bg-orange-700"),
                    Skill(name="Vite", level=85, color="bg-blue-400"),
                    Skill(name="Figma", level=75, color="bg-purple-400"),
                    Skill(name="Canvas", level=60, color="bg-green-500")
                ]
            )
        ],
        key_strengths=[
            Highlight(title="Responsive Design", description="Creating beautiful, mobile-first interfaces that work seamlessly across all devices.", icon_name="Layout"),
            Highlight(title="Security First", description="Implementing robust security measures and best practices in every application.", icon_name="Shield"),
            Highlight(title="Version Control", description="Expert in Git workflows, branching strategies, and collaborative development.", icon_name="GitBranch"),
            Highlight(title="UI/UX Focus", description="Strong eye for design with experience in creating intuitive user experiences.", icon_name="Palette")
        ],
        currently_learning=["Machine Learning", "Rust", "Cloud", "Python", "AI/ML Integration"]
    ),
    projects=[
        Project(
            id=1,
            title="Letter Hunt",
            description="A fun and interactive word guessing game built with modern web technologies. Players guess letters to uncover hidden words within a limited number of attempts.",
            image="https://i.postimg.cc/7LYmysFC/Screenshot-2025-07-17-212657.png",
            category="Web Game",
            technologies=["HTML", "CSS", "JavaScript", "Vite", "React"],
            features=["Interactive word guessing gameplay", "Responsive design for mobile and desktop", "Clean and modern UI", "Dynamic scoring system", "Fast performance with Vite build tool"],
            links=ProjectLinks(live="https://letter-hunt.vercel.app/", github="https://github.com/dag12y/Letter-Hunt"),
            status="Live",
            featured=True
        ),
        Project(
            id=2,
            title="Tenzies",
            description="A fast-paced dice game where players roll to match all dice to the same number. Built with React for a smooth user experience and interactive gameplay.",
            image="https://i.postimg.cc/YCxbZKsK/Screenshot-2025-07-17-212026.png",
            category="Web Game",
            technologies=["React", "JavaScript", "CSS", "Vite"],
            features=["Dice rolling mechanic", "Game state persistence", "Winning condition detection", "Responsive and clean UI", "Fast performance with Vite build tool"],
            links=ProjectLinks(live="https://tenzies-dagm.vercel.app/", github="https://github.com/dag12y/Tenzies"),
            status="Live",
            featured=False
        ),
        Project(
            id=3,
            title="Chef-AI",
            description="An AI-powered recipe suggestion app that generates personalized cooking ideas based on available ingredients. Built with React and powered by modern AI APIs.",
            image="https://i.postimg.cc/L6xJbx3Q/image.png",
            category="Web App",
            technologies=["React", "JavaScript", "CSS", "AI APIs", "Vite"],
            features=["AI-driven recipe generation", "Ingredient-based search", "User-friendly interface", "Responsive design", "Fast loading with Vite"],
            links=ProjectLinks(live="https://chef-ai-two.vercel.app/", github="https://github.com/dag12y/Chef-AI"),
            status="Live",
            featured=True
        ),
        Project(
            id=4,
            title="Amharic-Tigrigna Analyser",
            description="A linguistic analysis tool that processes Amharic and Tigrigna texts for morphological and syntactic insights. Designed to support language researchers and learners.",
            image="https://i.postimg.cc/PxzDrZBC/Screenshot-2025-07-17-220555.png",
            category="Language Tool",
            technologies=["Python", "Natural Language Processing", "Machine Learning", "Flask", "JavaScript"],
            features=["Morphological analysis", "Syntactic parsing", "Text tokenization", "Frequency distribution analysis", "User-friendly interface"],
            links=ProjectLinks(live=None, github="https://github.com/dag12y/amharic-tigrigna-analyser"),
            status="Completed",
            featured=True
        )
    ],
    experience=ExperienceData(
        work=[
            ExperienceItem(
                title="Ambassador Team Leader",
                company="SkillBridge Institute of Technology",
                location="Remote",
                period="2025 - Present",
                type="Volunteer Leadership",
                description="Leading a team of ambassadors to promote technology learning initiatives, organize workshops, and mentor students in coding and problem-solving.",
                achievements=[
                    "Built a vibrant community of learners and developers",
                    "Organized coding sessions and technology awareness events",
                    "Mentored peers in Data Structures & Algorithms and web development"
                ],
                technologies=["Leadership", "Team Management", "Public Speaking", "Technical Mentorship"]
            ),
            ExperienceItem(
                title="Hospital Management System Developer (Collaborative Project)",
                company="Independent Collaboration",
                location="Debre Berhan, Ethiopia",
                period="2024",
                type="Project-Based",
                description="Worked with a team to design and develop a hospital management system using MS Access. Built relational databases and user-friendly forms to improve hospital workflows.",
                achievements=[
                    "Designed and implemented a relational database for patient, staff, and ambulance records",
                    "Created intuitive forms for patient registration, employee management, and blood donation tracking",
                    "Reduced hospital registration time significantly by streamlining data entry and retrieval"
                ],
                technologies=["MS Access", "VBA (Visual Basic for Applications)", "Database Design", "UI Forms"]
            ),
            ExperienceItem(
                title="Independent Software Developer",
                company="Self-Learning & Freelance Projects",
                location="Debre Berhan, Ethiopia",
                period="2020 - Present",
                type="Independent",
                description="Built multiple personal and collaborative software projects while self-learning full-stack web development and modern programming practices.",
                achievements=[
                    "Developed a modern Chef AI system with real-time analytics and a user-friendly dashboard",
                    "Designed and deployed responsive portfolio websites and practical business applications for local users",
                    "Implemented version control and automated deployment workflows using Git, Vercel, and Netlify"
                ],
                technologies=["JavaScript", "React", "Node.js", "MongoDB", "Git & GitHub"]
            )
        ],
        education=[
            EducationItem(
                degree="Bachelor of Science in Electrical and Computer Engineering",
                school="Addis Ababa University",
                location="Addis Ababa, Ethiopia",
                period="2023 - Present",
                description="Pursuing a degree focused on the design and development of electrical systems, embedded hardware, and computer architecture.",
                relevant=[
                    "Digital Logic Design",
                    "Microprocessors & Embedded Systems",
                    "Signals & Systems",
                    "Control Systems",
                    "Circuit Analysis & Design"
                ]
            ),
            EducationItem(
                degree="Data Structures & Algorithms",
                school="SkillBridge Institute of Technology",
                location="Online",
                period="2025 - Present",
                description="Learning advanced data structures and algorithms to write efficient and optimized code for solving complex problems.",
                relevant=[
                    "Algorithm Analysis",
                    "Sorting & Searching Algorithms",
                    "Dynamic Programming",
                    "Graph Algorithms"
                ]
            ),
            EducationItem(
                degree="Machine Learning & Artificial Intelligence",
                school="AWS Educate",
                location="Online",
                period="2024 - Present",
                description="Focused on mastering machine learning and AI fundamentals using AWS services and tools to build intelligent applications.",
                relevant=[
                    "Machine Learning Fundamentals",
                    "Deep Learning with AWS",
                    "Data Preprocessing & Model Training",
                    "AI Services (AWS SageMaker, Rekognition, Lex)"
                ]
            ),
            EducationItem(
                degree="Self-Taught Software Development",
                school="Independent Learning",
                location="Debre Berhan, Ethiopia",
                period="2020 - Present",
                description="Learning and applying modern web technologies to build real-world software solutions, complementing my hardware knowledge.",
                relevant=[
                    "Full-Stack Web Development (React, Node.js)",
                    "Database Systems (SQL, MongoDB)",
                    "Version Control (Git & GitHub)",
                    "Building and deploying web applications"
                ]
            )
        ],
        certifications=[
            "Scrimba: Learn React",
            "Udacity Nanodegree: Programming Fundamentals"
        ]
    ),
    contact=ContactInfo(
        email="dagimyibabe19@gmail.com",
        phone="+251-97-913-5593",
        location="Debre Berhan, Ethiopia"
    )
)
