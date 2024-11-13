from pydantic import BaseModel
from app.db.session.more_db import Session
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from fastapi import APIRouter, Depends, HTTPException
from app.db.base import get_db
from typing import List

from app.crud.more_crud import get_ivtinfo
from app.schemas.more_schemas import InverterInfo

router = APIRouter(
    prefix="/more",
    tags=["MORE"]
)


@router.get("/ivtinfo/{untid}/{ivtid}", response_model=List[InverterInfo])
async def get_ivt_info_api(untid: str, ivtid: str):
    ivt_info = await get_ivtinfo(untid, ivtid)

    if ivt_info is None:
        raise HTTPException(status_code=404, detail="Inverter not found")

    return ivt_info
