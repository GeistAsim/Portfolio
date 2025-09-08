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
        "title": item["title"],
        "url": item["url"]
    }

def link_Entitys(items) -> list:
    return [link_Entity(item) for item in items]


# -------------------------------
# Schemas for about data
# -------------------------------
def about_Entity(item):
    return{
        "id": str(item["_id"]),
        "title": item["title"],
        "desc": item["desc"]
    }

def about_Entitys(items) -> list:
    return [about_Entity(item) for item in items]