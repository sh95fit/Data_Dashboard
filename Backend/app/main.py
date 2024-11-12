from fastapi import FastAPI
from app.middleware.cors import add_cors_middleware

from app.apis.v1.endpoints import ikea_api

app = FastAPI(
    title="Data Dashboard",
    description="Data Dashboard Backend API"
)

add_cors_middleware(app)


@app.get('/')
def main():
    return "hello"


app.include_router(ikea_api.router)
