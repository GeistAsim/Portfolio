import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.user_routes import user_routes


load_dotenv()

SELF_HOST = os.getenv("SELF_HOST")
LOCAL_HOST = os.getenv("LOCAL_HOST")
GLOBAL_HOST = os.getenv("GLOBAL_HOST")


orginis = [
    SELF_HOST,
    LOCAL_HOST,
    GLOBAL_HOST
]


app = FastAPI()
app.include_router(user_routes)


app.add_middleware(
    CORSMiddleware,
    allow_origins=orginis,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
