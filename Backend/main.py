import os
import uvicorn
from dotenv import load_dotenv

load_dotenv()


SERVER_PORT = int(os.getenv("SERVER_PORT"))



if __name__ == "__main__":
    uvicorn.run(
        app="app.app:app",
        host="0.0.0.0",
        port=SERVER_PORT,
        reload=True
    )
