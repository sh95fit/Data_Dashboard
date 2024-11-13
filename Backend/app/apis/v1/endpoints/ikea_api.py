from fastapi import APIRouter, Depends
from app.db.base import get_db
# from sqlalchemy.orm import Session
from sqlalchemy.ext.asyncio import AsyncSession

from app.crud.ikea_crud import plant_info

from app.schemas.ikea_schemas import PlantSchema
from typing import List

router = APIRouter(
    prefix="/api",
    tags=["IKEA"]
)


@router.get("/plant/{untid}/{pwrid}", response_model=List[PlantSchema])
async def call_plant(untid: str, pwrid: str, db: AsyncSession = Depends(get_db)):
    plant = await plant_info(db, untid, pwrid)
    # return [PlantSchema(ivtid=row[0], uninm=row[1], idx=row[2]) for row in plant]
    return plant
