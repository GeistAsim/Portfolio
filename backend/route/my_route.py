from fastapi import APIRouter
from fastapi import FastAPI
from fastapi import BackgroundTasks
from fastapi import Form
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from config.message_server import email_Server, ES_MAIL, ES_PASS
from config.db import conn
from schema.py_valid import Home, ContactForm
from model.py_model import (
    home_Entitys,
    link_Entitys,
    about_Entitys,
    project_Entitys,
    contact_Entitys,
)

# Making a router
my = APIRouter()


# getting all the links
@my.get("/links")
async def loadlinks():
    links = conn.home.links.find({})
    links_str = link_Entitys(links)
    if not links_str:
        return JSONResponse(content=links_str, status_code=404)

    return JSONResponse(content=links_str, status_code=200)


# getting Home data
@my.get("/home")
async def loadhome():
    docs = conn.home.me.find({})
    home_data = home_Entitys(docs)
    if not home_data:
        return JSONResponse(content=home_data, status_code=404)

    return JSONResponse(content=home_data, status_code=200)


# get about data
@my.get("/about")
async def loadabout():
    docs = conn.about.bio.find({})
    about_data = about_Entitys(docs)
    if not about_data:
        return JSONResponse(content=about_data, status_code=404)

    return JSONResponse(content=about_data, status_code=200)


# Post image on mongo db
@my.post("/post/project")
async def postProject(
    project: str = Form(),
    project_desc: str = Form(),
    link: str = Form(),
    imglink: str = Form(),
):
    try:
        project_doc = {
            "project": project,
            "project_desc": project_desc,
            "link": link,
            "imglink": imglink,
        }

        post = conn.prjects.projects.insert_one(project_doc)

        return JSONResponse(
            content={
                "message": "project inserted successfully",
                "id": str(post.inserted_id),
            }
        )

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


# get project data
@my.get("/projects")
async def loadprojects():
    docs = conn.projects.projects.find({})
    projects_data = project_Entitys(docs)
    print("project data", projects_data)

    if not docs:
        return JSONResponse(content=projects_data, status_code=404)

    return JSONResponse(content=projects_data, status_code=200)


# get contact data
@my.get("/get/contact")
async def loadContact():
    docs = conn.contacts.contacts.find({})
    contact_data = contact_Entitys(docs)

    if not docs:
        return JSONResponse(content=contact_data, status_code=404)

    return JSONResponse(content=contact_data, status_code=200)


# post contact
@my.post("/contact")
async def postMessage(form: ContactForm, background_tasks: BackgroundTasks):
    # save message in DB
    conn.contacts.contacts.insert_one(form.dict())

    # ---Email Setup---
    my_email = ES_MAIL
    my_pass = ES_PASS

    # mail my self
    owner_subject = f"📩 New Message from {form.name} ({form.email})"
    owner_body = f"""
You receive a new Mail:

Name: {form.name}
Email: {form.email}

Subject: {form.subject}

Message: {form.message}
"""

    background_tasks.add_task(
        email_Server,
        my_email,
        my_pass,
        my_email,
        owner_subject,
        owner_body,
    )

    # Confirmation mail to client
    client_subject = f"✅ We received your message"
    client_body = f"""
Hello {form.name} ,

Thank You for contacting me!
I receive your mail:

    "{form.message}"

I will get back to you shortly.

- Asim Saifi
"""

    # send confirmation mail to the client
    background_tasks.add_task(
        email_Server,
        my_email,
        my_pass,
        form.email,
        client_subject,
        client_body,
    )

    return {"status": "success", "message": "Message recieved! & stored in DB"}
