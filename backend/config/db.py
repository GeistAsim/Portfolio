import os
from dotenv import load_dotenv
from pymongo import MongoClient
from urllib.parse import quote_plus

# get .env
ENV = os.getenv("APP_ENV", "Development")

# Check if ENV is Development
if ENV == "Development":
    BASE_DIR = os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )  # project root
    env_file = os.path.join(BASE_DIR, "env", f".env.{ENV}")

    # env_file = os.path.abspath(f"backend/env/.env.{ENV}")   # for only run this file
    # env_file = os.path.abspath(f"env/.env.{ENV}")

    print("Loading env file from: ", env_file)
    load_dotenv(dotenv_path=env_file)

# get MongoDB credentials from ENV variables
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")
DB_HOST = os.getenv("DB_HOST")
DEBUG = os.getenv("DEBUG", "False") == "True"

# check if username and password get or not
if not DB_USER or not DB_PASS:
    raise ValueError("DB crendials are missing")

print("DB_USER: ", DB_USER)
print("DB_HOST: ", DB_HOST)
print("DEBUG: ", DEBUG)

# Espace special cheracters in DB_PASS
ENCODED_DB_PASS = quote_plus(str(DB_PASS))

# connect MongoDB
try:
    client = f"mongodb+srv://{DB_USER}:{ENCODED_DB_PASS}@{DB_HOST}"
    conn = MongoClient(client)
except Exception as e:
    print("MongoDb Error!")
    print(e)

# get the .env file name
DB_NAME = os.getenv("DB_NAME", "None")
db = print(f"Connected to: {DB_NAME}")
