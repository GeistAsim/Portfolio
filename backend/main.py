from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from route.my_route import my

# Making Fastapi App
app = FastAPI()

# origins
origins = [
    "https://asimsaifi.netlify.app",
    "https://adminasimsaifi.netlify.app",
    "http://127.0.0.1:3000"
]

# make a bridge connection between frontend and admin <---> backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include the route to the app
app.include_router(my, prefix="/api")
