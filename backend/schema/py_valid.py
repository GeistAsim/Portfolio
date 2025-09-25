from pydantic import BaseModel, EmailStr, HttpUrl
from typing import Optional, Union


class Home(BaseModel):
    name: str
    role: str
    github_link: str


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str


class Link(BaseModel):
    title: str
    url: Union[HttpUrl, EmailStr]


class UpdateLink(BaseModel):
    title: Optional[str] = None
    url: Optional[Union[HttpUrl, EmailStr]] = None


class Project(BaseModel):
    project: str
    project_desc: str
    link: HttpUrl
    imglink: HttpUrl


class UpdateProject(BaseModel):
    project: Optional[str] = None
    project_desc: Optional[str] = None
    link: Optional[HttpUrl] = None
    imglink: Optional[HttpUrl] = None

class UpdateAbout(BaseModel):
    title: Optional[str] = None
    desc: Optional[str] = None
