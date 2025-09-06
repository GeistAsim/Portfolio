# -------------------------------
# Schemas for Home Data
# -------------------------------
def home_Entity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "role": item["role"],
        "name": item["name"],
        "github_username": item["github_username"]
    }

def home_Entitys(items) -> list:
    return [home_Entity(item) for item in items]


# -------------------------------
# Schemas for Links
# -------------------------------
def link_Entity(item):
    return {
        "id": str(item["_id"]),
        "github_link": item["github_link"],
        "email": item["email"],
        "insta_id": item["insta_id"],
        "linked_in": item["linked_in"],
        "upwork": item["upwork"],
        "fiverr": item["fiverr"]
    }

def link_Entitys(items):
    return [link_Entity(item) for item in items]


# -------------------------------
# Schemas for about data
# -------------------------------
def about_Entity(item):
    return{
        "id": str(item["_id"])
    }