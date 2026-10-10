from schema import PortfolioData, HeroData, AboutData, SkillsData, SkillCategory, SocialLinks, Highlight, Project, ProjectLinks, Skill, ExperienceData, ExperienceItem, EducationItem, ContactInfo

portfolio_data = PortfolioData(
    hero=HeroData(
        name="Mohammad Asim Saifi",
        role="Software Developer",
        bio=(
            "3rd-year BCA student at Manipal University Jaipur (9.03 CGPA).\n"
            "I build backend APIs with Python/FastAPI and full-stack apps with React and MongoDB, and I'm looking for an internship or Job."
        ),
        resume_link="https://drive.google.com/uc?export=download&id=18HP_aJj_1YjNANSfRy7fX2Nz6M50jyYp",  # TODO: replace with actual resume PDF link if available
        socials=SocialLinks(
            github="https://github.com/GeistAsim/",
            linkedin="http://www.linkedin.com/in/asim-saifi",
            twitter="https://x.com/GeistAsim",
            email="geistasim@gmail.com"
        )
    ),
    about=AboutData(
        title="About Me",
        description=(
            "I am a BCA student at Manipal University Jaipur. I build backend APIs with "
            "Python and FastAPI, and full-stack web applications with React and SQL."
        ),
        journey_paragraphs=[
            "I am in my 3rd year of BCA at Manipal University Jaipur. My current CGPA is 9.03. "
            "I have studied Data Structures, Database Management Systems, Python Programming, "
            "Web Development, and Backend Development.",

            "I built E-ShopMine, an account management system for a shop owner to store customer "
            "data, track transactions, government charges, service charges, dues, and service "
            "status. It is in active development and is being used by a CSE Center.",

            "I also built a Clinic Management Web Application with a FastAPI backend, MongoDB "
            "database, and React frontend. It has patient-facing pages for appointment booking "
            "and doctor info, plus an admin dashboard to view today's appointments, manage "
            "doctors, update services, and track patient counts. I implemented JWT "
            "authentication to protect admin routes.",

            "I learned FastAPI, React, and MongoDB outside my university coursework. I am "
            "currently exploring machine learning with TensorFlow and PyTorch, open-source "
            "contribution, and competitive coding."
        ],
        years_experience="Fresher",
        projects_completed="2",
        technologies_mastered="15+",
        highlights=[
            Highlight(
                title="Python & FastAPI",
                description="I build REST APIs with Python and FastAPI.",
                icon_name="Code"
            ),
            Highlight(
                title="JWT Authentication",
                description="I have implemented JWT-based authentication and authorization in backend projects.",
                icon_name="Shield"
            ),
            Highlight(
                title="React Frontends",
                description="I build React frontends with Tailwind CSS for full-stack applications.",
                icon_name="Layout"
            ),
            Highlight(
                title="MongoDB & SQL",
                description="I use MongoDB, MySQL, and MariaDB for data storage.",
                icon_name="Database"
            )
        ]
    ),
    skills=SkillsData(
        categories=[
            SkillCategory(
                title="Languages",
                icon_name="Code",
                skills=[
                    Skill(name="Python", level=95, color="bg-yellow-500"),
                    Skill(name="JavaScript (ES6+)", level=80, color="bg-yellow-400"),
                    Skill(name="SQL", level=85, color="bg-blue-500")
                ]
            ),
            SkillCategory(
                title="Frameworks & Libraries",
                icon_name="Globe",
                skills=[
                    Skill(name="FastAPI", level=85, color="bg-green-600"),
                    Skill(name="React.js", level=80, color="bg-blue-500"),
                    Skill(name="Tailwind CSS", level=75, color="bg-teal-500")
                ]
            ),
            SkillCategory(
                title="Databases",
                icon_name="Database",
                skills=[
                    Skill(name="MySQL", level=80, color="bg-blue-700"),
                    Skill(name="MariaDB", level=70, color="bg-blue-800"),
                    Skill(name="MongoDB", level=75, color="bg-green-700")
                ]
            ),
            SkillCategory(
                title="API & Integration",
                icon_name="Server",
                skills=[
                    Skill(name="RESTful API Development", level=85, color="bg-purple-500"),  # TODO: set level
                    Skill(name="Authentication (JWT) & Authorization", level=80, color="bg-pink-500"),  # TODO: set level
                    Skill(name="Request Library", level=75, color="bg-indigo-500")  # TODO: set level
                ]
            ),
            SkillCategory(
                title="Tools & Others",
                icon_name="Wrench",
                skills=[
                    Skill(name="Git & GitHub", level=80, color="bg-orange-700"),
                    Skill(name="VS Code", level=90, color="bg-blue-400"),
                    Skill(name="CLI", level=70, color="bg-gray-700"),
                    Skill(name="Docker", level=50, color="bg-blue-600"),
                    Skill(name="Linux", level=60, color="bg-gray-800"),
                    Skill(name="HTML", level=85, color="bg-orange-500"),
                    Skill(name="CSS", level=80, color="bg-blue-500"),
                    Skill(name="Version Control System", level=80, color="bg-orange-600"),
                ]
            )
        ],
        key_strengths=[
            Highlight(
                title="Python & FastAPI",
                description="I build backend APIs with Python and FastAPI.",
                icon_name="Code"
            ),
            Highlight(
                title="REST APIs",
                description="I design and build RESTful APIs.",
                icon_name="Server"
            ),
            Highlight(
                title="JWT Authentication",
                description="I implement JWT-based authentication and authorization.",
                icon_name="Shield"
            ),
            Highlight(
                title="Full-Stack Apps",
                description="I build full-stack applications with FastAPI, React, and SQL.",
                icon_name="Layers"
            )
        ],
        currently_learning=[
            "Machine Learning",
            "TensorFlow",
            "PyTorch",
            "Open Source Contribution",
            "Competitive Coding"
        ]
    ),
    projects=[
        Project(
            id=1,
            title="E-ShopMine (Account Management System)",
            description=(
                "A backend account management system for shop owners to store customer data, "
                "track transactions, government charges, service charges, due payments, and "
                "service status. Currently in active development and used by a CSE Center."
            ),
            image="https://www.yardicorom.com/wp-content/uploads/sites/73/2024/03/2299807799.jpg",
            category="Backend / Account Management",
            technologies=[
                "Python",
                "FastAPI",
                "JWT Authentication",
                "MongoDB",
                "REST API"
            ],
            features=[
                "Secure authentication system with JWT",
                "Store customer name, contact number, service used, and requested service",
                "Finance section tracking government charges, service charges, total amount, and dues",
                "Application ID field to track customer service status",
                "Shop customer data storage for future use"
            ],
            links=ProjectLinks(
                live="https://eshopmine.netlify.app/",
                github="https://github.com/GeistAsim/E-Shopmine"
            ),
            status="Active Development & In Use",
            featured=True
        ),
        Project(
            id=2,
            title="Clinic Management Web Application",
            description=(
                "A dual-interface full-stack application for a clinic to manage patient "
                "appointments and administrative tasks."
            ),
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzdXMDSFCpbtylgBBjCMo5K2GHQHe6rbvTxe_NcqwYA&s=10",
            category="Full-Stack Web App",
            technologies=[
                "Python",
                "FastAPI",
                "React.js",
                "MongoDB",
                "REST API"
            ],
            features=[
                "Patient-facing pages for appointment booking and doctor info",
                "Separate admin dashboard",
                "View today's appointments",
                "Manage active doctors and update services",
                "Track patient counts with real-time backend data",
                "Self-implemented authentication layer using React hooks to protect admin routes and verify sessions on reload"
            ],
            links=ProjectLinks(
                live=None,
                github="https://github.com/GeistAsim/Family-Health-Care"  # TODO: add project GitHub URL
            ),
            status="Completed",
            featured=True
        )
    ],
    experience=ExperienceData(
        work=[
            ExperienceItem(
                title="Self-Taught Developer",
                company="Independent Learning",
                location="Jaipur, India",
                period="Present",
                type="Self-Learning",
                description=(
                    "I learned FastAPI, React, and MongoDB outside university coursework "
                    "and used them to build real applications."
                ),
                achievements=[
                    "Built E-ShopMine, an account management system currently used by a CSE Center",
                    "Built a Clinic Management Web Application with FastAPI, React, and MongoDB",
                    "Implemented secure JWT authentication and REST APIs",
                    "Maintained a 9.03 CGPA while building projects"
                ],
                technologies=[
                    "Python",
                    "FastAPI",
                    "React.js",
                    "MongoDB",
                    "JWT",
                    "REST API",
                    "Git & GitHub"
                ]
            )
        ],
        education=[
            EducationItem(
                degree="Bachelor of Computer Applications (BCA)",
                school="Manipal University Jaipur",
                location="Jaipur, India",
                period="3rd Year",
                description=(
                    "Current CGPA: 9.03 "
                    "(Semester 1: 9.18 SGPA, Semester 2: 8.68 SGPA, Semester 3: 8.73 SGPA)."
                ),
                relevant=[
                    "Data Structures",
                    "Database Management Systems",
                    "Python Programming",
                    "Web Development",
                    "Backend Development"
                ]
            )
        ],
        certifications=[]
    ),
    contact=ContactInfo(
        email="geistasim@gmail.com",
        phone="+91",
        location="Jaipur, India"
    )
)
