from pydantic import BaseModel

class Home(BaseModel):
    name: str
    role: str
    github_link: str