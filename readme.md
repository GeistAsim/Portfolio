# Geist Asim – Personal Portfolio

[![GitHub stars](https://img.shields.io/github/stars/SynaptrixAsim/asim-saifi?style=social)](https://github.com/SynaptrixAsim/asim-saifi)  
_A little window into who I am, what I’ve built and where I’m going_

## 🚀 About Me

Hi, I’m **Asim Saifi**, currently a 2nd-year BCA student diving deep into web development and AI/ML engineering.  
My journey so far includes building full-stack apps, backend services with Python & FastAPI, taking on Data Structures & Algorithms, and preparing to transition into real-world AI projects.  
This repo is my **portfolio website** — where I showcase my skills, projects and passion.

## 🧰 Technologies & Stack

Here are some of the tools and frameworks I’m working with:

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), React (first experience)
- **Backend**: Python, FastAPI, MongoDB
- **Data & Algorithms**: Data Structures (DCA-1207), Algorithms, Foundations for ML/AI
- **AI/ML** (in progress): Exploring LLMs, Vision Transformers, Reinforcement Learning, Autonomous Agents
- **DevOps / Deployment**: GitHub, Git, Basic CI/CD ideas (portfolio live-demo)

## 📂 Repository Structure

```text
asim-saifi/
│
├── .gitignore                 # Git ignore file
├── README.md                  # Project documentation
│
├── Admin/                     # Admin dashboard (management interface)
│   ├── index.html             # Entry point for admin panel
│   ├── package.json           # npm config (Tailwind or dependencies)
│   ├── package-lock.json
│   ├── favicon.ico
│   │
│   ├── images/                # Admin panel images
│   │   └── svg/               # SVG assets
│   │       ├── logo.svg
│   │       └── close.svg
│   │
│   ├── JS/                    # Admin-side scripts
│   │   ├── script_admin.js
│   │   └── server_admin.js
│   │
│   ├── pages/                 # HTML pages for admin site
│   │   ├── about.html
│   │   ├── home.html
│   │   ├── links.html
│   │   └── projects.html
│   │
│   └── src/                   # Source CSS (Tailwind input)
│       └── input.css
│
├── backend/                   # Python FastAPI backend
│   ├── main.py                # Entry point (FastAPI app)
│   ├── requirements.txt       # Backend dependencies
│   ├── __init__.py
│   │
│   ├── config/                # Configuration & utilities
│   │   ├── db.py              # Database connection setup
│   │   ├── message_server.py  # Messaging or email server config
│   │   └── __init__.py
│   │
│   ├── model/                 # Database models
│   │   ├── py_model.py
│   │   └── __init__.py
│   │
│   ├── route/                 # API routes/endpoints
│   │   ├── my_route.py
│   │   └── __init__.py
│   │
│   └── schema/                # Pydantic schemas (data validation)
│       ├── py_valid.py
│       └── __init__.py
│
└── frontend/                  # Main public-facing portfolio site
    ├── index.html             # Main landing page
    ├── favicon.ico
    │
    ├── CSS/                   # Stylesheets
    │   ├── style.css
    │   ├── utility.css
    │   └── responsive.css
    │
    ├── JS/                    # Frontend scripts
    │   ├── script.js
    │   └── server.js
    │
    ├── pages/                 # Other portfolio pages
    │   ├── home.html
    │   ├── about.html
    │   ├── project.html
    │   └── contact.html
    │
    └── images/                # Image assets
        ├── Language Icon/     # Tech stack logos
        │   ├── html.png
        │   ├── css.png
        │   ├── JavaScript.png
        │   └── python.png
        │
        ├── Project/           # Screenshots for showcased projects
        │   └── EchoJunction/
        │       └── cover.jpg
        │
        └── svg/               # Icons and vector assets
            ├── github.svg
            ├── linkedin.svg
            ├── mail.svg
            ├── menu.svg
            ├── logo.svg
            └── more...
```

## 🎯 Features of the Portfolio

Responsive design — works on mobile, tablet and desktop

Highlights of my past projects (full-stack, web apps, AI prototypes)

About section: my story, aspirations (AI/ML engineer + abroad ambition)

Contact section: link to GitHub, LinkedIn, email

Clean code, semantic HTML, styled components or CSS/SCSS as needed

## 📌 Why This Portfolio?

To showcase not only what I have done, but what I am capable of doing (especially shifting into AI/ML engineering)

To reflect my growth mindset: from basic tools → intermediate backend & full-stack → moving into advanced AI topics

To serve as a marker for recruiters: I’m a Python-/backend-/full-stack-ready fresher, building on that to become AI/ML engineer

## ✅ Getting Started

### To run this portfolio locally

```bash
# Clone the repo
git clone https://github.com/SynaptrixAsim/asim-saifi.git
cd asim-saifi

# If frontend uses npm/yarn
cd frontend
npm install
npm start

# If backend exists
cd ../backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 📫 Contact Me

If you’d like to connect, collaborate or just say hi:

GitHub: SynaptrixAsim

Email: asim.saifi@example.com
(replace with your actual email)

LinkedIn: [Your LinkedIn URL]

Portfolio Live Demo: [Your Hosted Site URL] (if deployed)

## 📄 License

This project is licensed under the MIT License
– feel free to use parts of it, but please give attribution!

#

Thanks for stopping by my portfolio! I’m excited about the road ahead — building, learning, and contributing.

Synaptrix Asim
