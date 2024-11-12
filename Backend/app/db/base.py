from app.db.session.more_db import Session
from sqlalchemy.ext.asyncio import AsyncSession

# # 동기 처리 시
# def get_db():
#     db = Session()
#     try:
#         yield db
#     finally:
#         db.close()

# 비동기 처리 시


async def get_db():
    async with Session() as db:
        yield db
