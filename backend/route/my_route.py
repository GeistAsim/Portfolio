from fastapi import APIRouter
from fastapi import FastAPI
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from config.db import conn
from schema.py_valid import Home
from model.py_model import home_Entitys, link_Entitys, about_Entitys

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
