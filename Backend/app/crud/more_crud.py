from app.db.session.more_db import engine, Session
from app.models.more_test import get_ivt_info_class

from sqlalchemy.future import select


async def get_ivtinfo(untid: str, ivtid: str):
    # Ivt_info = await get_ivt_info_class()
    Ivt_info = await get_ivt_info_class()
    async with Session() as session:
        query = select(Ivt_info).filter(
            Ivt_info.UNTID == untid, Ivt_info.IVTID == ivtid)

        result = await session.execute(query)
        ivt_info = result.fetchone()

        return ivt_info
