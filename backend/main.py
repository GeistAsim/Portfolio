import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from route.my_route import my

# Making Fastapi App
app = FastAPI()

# make a bridge connection between frontend <---> backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include the route to the app
app.include_router(my, prefix="/api")
