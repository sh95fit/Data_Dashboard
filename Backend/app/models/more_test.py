from sqlalchemy import MetaData
from sqlalchemy.ext.automap import automap_base

from app.db.session.more_db import engine

metadata = MetaData()

Base = automap_base(metadata=metadata)

_is_base_prepared = False


async def prepare_base():
    global _is_base_prepared

    if not _is_base_prepared:
        async with engine.connect() as conn:
            await conn.run_sync(metadata.reflect)
            Base.prepare()

        _is_base_prepared = True
        print("Base prepared successfully.")
    else:
        print("Base is already prepared, skipping preparation.")


async def get_ivt_info_class():
    await prepare_base()
    Ivt_info = Base.classes.tb_invertinfo
    return Ivt_info
