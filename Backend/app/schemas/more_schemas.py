from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class InverterInfo(BaseModel):
    UNTID: Optional[str] = None
    IVTID: Optional[str] = None
    MODEL: Optional[str] = None
    SELIALNO: Optional[str] = None
    MARKER: Optional[str] = None
    TELNO: Optional[str] = None
    BUYDATE: Optional[str] = None
    CAPACITY: Optional[str] = None
    ELETTYPE: Optional[str] = None
    REMARK: Optional[str] = None
    USETYPE: Optional[str] = None
    REGUSER: Optional[str] = None
    EDTUSER: Optional[str] = None
    REGDATIME: Optional[datetime] = None
    EDTDATIME: Optional[datetime] = None
    USENCONNUM: Optional[int] = None
    STATIONNO: Optional[str] = None
    MULTI: Optional[str] = None
    GSREMSYN: Optional[str] = None
    GSREMS_CID: Optional[str] = None
    GSREMS_RTUID: Optional[str] = None
    GSREMS_STATIONNO: Optional[str] = None
    GSREMS_STATUS: Optional[str] = None
    STATUS: Optional[str] = None
    OUTP: Optional[int] = None
    LASTDATIME: Optional[datetime] = None
    LASTCPG: Optional[int] = None
    LASTTPG: Optional[int] = None
    OTHERNAME: Optional[str] = None
    DELFLG: Optional[str] = None
    REMSSYNCNUM: Optional[int] = None
    YESTDAYCPG: Optional[int] = None
    MODULE: Optional[str] = None
    MODULECNT: Optional[int] = None

    class Config:
        from_attributes = True
