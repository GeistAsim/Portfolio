from fastapi import APIRouter
from fastapi import FastAPI
from fastapi.requests import Request
from fastapi.responses import HTMLResponse, JSONResponse
from bson import ObjectId
# from config.db import conn

# Making a router
my = APIRouter()

# Home
@my.get("/home")
async def home():
    return [{"message": "Hello from FastAPI"},{"Now": "Finally working"}]