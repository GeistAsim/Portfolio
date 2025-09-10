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


# -------------------------------
# Schemas for Projects data
# -------------------------------
def project_Entity(item):
    return {
        "id": str(item["_id"]),
        "project": item["project"],
        "project_desc": item["project_desc"],
        "link": item["link"],
        "imglink": item["imglink"]
    }

def project_Entitys(items):
    return [project_Entity(item) for item in items]


# -------------------------------
# Schemas for Projects data
# -------------------------------
def contact_Entity(item):
    return {
        "id": str(item["_id"]),
        "name": item["name"],
        "email": item["email"],
        "subject": item["subject"],
        "message": item["message"]
    }

def contact_Entitys(items):
    return [contact_Entity(item) for item in items]