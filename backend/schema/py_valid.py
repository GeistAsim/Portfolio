from pydantic import BaseModel, EmailStr

class Home(BaseModel):
    name: str
    role: str
    github_link: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str