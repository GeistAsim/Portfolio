from fastapi import APIRouter
from fastapi import FastAPI
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from config.db import conn
from schema.py_valid import Home
from model.py_model import home_Entity, home_Entitys, link_Entity, link_Entitys

# Making a router
my = APIRouter()


# getting Home data
@my.get("/home")
async def loadhome():
    docs = conn.home.me.find({})
    home_data = home_Entitys(docs)
    return JSONResponse(content=home_data, status_code=200)


# getting all the links
@my.get("/links")
async def loadlinks():
    links = conn.home.links.find({})
    links_str = link_Entitys(links)
    return JSONResponse(content=links_str, status_code=200)