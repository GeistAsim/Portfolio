from pydantic import BaseModel, EmailStr, HttpUrl
from typing import Optional, Union


class Home(BaseModel):
    name: str
    role: str
    github_link: str


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class Link(BaseModel):
    title: str
    url: Union[HttpUrl, EmailStr]


class UpdateLink(BaseModel):
    title: Optional[str] = None
    url: Optional[Union[HttpUrl, EmailStr]] = None
