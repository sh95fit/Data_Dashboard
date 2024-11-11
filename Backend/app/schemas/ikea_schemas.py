from pydantic import BaseModel
from typing import Optional


class PlantSchema(BaseModel):
    IVTID: Optional[str] = None
    UNINM: Optional[str] = None
    IDX: Optional[int] = None

    class Config:
        from_attributes = True
