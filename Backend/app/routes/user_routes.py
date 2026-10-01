from fastapi import APIRouter


# User API Routes
user_routes = APIRouter()


@user_routes.get("/")
async def hero():
    return "Router setup!!!"
