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
