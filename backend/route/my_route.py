from fastapi import APIRouter
from fastapi import FastAPI, HTTPException
from fastapi import BackgroundTasks
from fastapi import Form
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from bson import ObjectId
from config.message_server import email_Server, ES_MAIL, ES_PASS
from config.db import conn
from schema.py_valid import (
    Home,
    ContactForm,
    Link,
    UpdateLink,
    Project,
    UpdateProject,
    UpdateAbout,
)
from model.py_model import (
    home_Entitys,
    link_Entitys,
    about_Entitys,
    project_Entitys,
    contact_Entitys,
)
from model.py_model import link_Entity, project_Entity, about_Entity

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

        post = conn.projects.projects.insert_one(project_doc)

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

    if not projects_data:
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
    # conn.contacts.contacts.insert_one(form.dict())

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
    client_subject = f"✅ I received your message {form.name}"
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


# post links
@my.post("/post/links", response_model=Link)
async def newlink(link: Link):
    # make url a plain str
    data = link.dict()
    data["url"] = str(link.url)

    # inert in DB
    docs = conn.home.links.insert_one(data)

    if not docs:
        return {"status": "failed", "message": "server filed to post link"}

    print(docs)
    return link


# update links
@my.put("/update/links/{link_ID}", response_model=UpdateLink)
async def updatedlink(link_ID: str, link: UpdateLink):
    try:
        obj_id = ObjectId(link_ID)
    except:
        raise HTTPException(status_code=404, detail="Invalid link_ID format")

    existing = conn.home.links.find_one({"_id": obj_id})
    if not existing:
        raise HTTPException(status_code=400, detail="link not found")

    updateData = {
        k: (str(v) if k == "url" and v is not None else v)
        for k, v in link.dict().items()
        if v is not None
    }
    if not updateData:
        raise HTTPException(status_code=400, detail="No data provided to update")

    updateDocs = conn.home.links.update_one({"_id": obj_id}, {"$set": updateData})

    if updateDocs.modified_count == 0:
        raise HTTPException(status_code=400, detail="No change were made")

    newdoc = conn.home.links.find_one({"_id": obj_id})
    return link_Entity(newdoc)


@my.post("/add/project", response_model=Project)
async def newProject(project: Project):
    projectdata = project.dict()
    projectdata["link"] = str(project.link)
    projectdata["imglink"] = str(project.imglink)

    # insert project in DB
    docs = conn.projects.projects.insert_one(projectdata)

    if not docs:
        return {"status": "failed", "message": "server filed to post Project"}

    print(docs)
    return project


@my.put("/update/project/{project_ID}", response_model=UpdateProject)
async def updateProject(project_ID: str, project: UpdateProject):
    try:
        p_ID = ObjectId(project_ID)
    except:
        raise HTTPException(status_code=404, detail="Invalid project_ID format")

    existing_project = conn.projects.projects.find_one({"_id": p_ID})
    if not existing_project:
        raise HTTPException(status_code=404, detail="No project found!")

    projectupdate = {
        k: (str(v) if (k == "link" or k == "imglink") and v is not None else v)
        for k, v in project.dict().items()
        if v is not None
    }

    if not projectupdate:
        raise HTTPException(status_code=400, detail="No data provided to update")

    updatedocs = conn.projects.projects.update_one(
        {"_id": p_ID}, {"$set": projectupdate}
    )
    if updatedocs.modified_count == 0:
        raise HTTPException(status_code=400, detail="No change were made")

    newdoc = conn.projects.projects.find_one({"_id": p_ID})
    return project_Entity(newdoc)


# upadte about data
@my.put("/update/about/{about_ID}", response_model=UpdateAbout)
async def updateAbout(about_ID: str, bio: UpdateAbout):
    try:
        b_ID = ObjectId(about_ID)
    except:
        raise HTTPException(status_code=404, detail="Invalid project_ID format")

    existing_about = conn.about.bio.find_one({"_id": b_ID})
    if not existing_about:
        raise HTTPException(status_code=400, detail="No DATA found")

    bioUpdate = {k: v for k, v in bio.dict().items()}
    if not bioUpdate:
        raise HTTPException(status_code=400, detail="no DATA provided to update")

    updatedocs = conn.about.bio.update_one({"_id": b_ID}, {"$set": bioUpdate})
    if updatedocs.modified_count == 0:
        raise HTTPException(status_code=400, detail="no changes were made")

    newdoc = conn.about.bio.find_one({"_id": b_ID})
    return about_Entity(newdoc)
