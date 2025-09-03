import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
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

# include Static frontend folder
base_dir = os.path.dirname(os.path.abspath(__file__))
frontend_path = os.path.join(base_dir, "..", "frontend")

# checking if path exist or not
if os.path.exists(frontend_path):
    print(f"Frontend folder obtain on path: {frontend_path}")
    app.mount("/static", StaticFiles(directory=frontend_path), name="frontend")
else:
    raise ValueError ("Frontend folder missing")

# include the route to the app
app.include_router(my, prefix="/api")


