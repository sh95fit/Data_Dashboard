from sqlalchemy.orm import Session
from sqlalchemy import text


# 저장 프로시저 호출을 위한 함수
def plant_info(db: Session, untid: int, pwrid: int):
    # 'CALL'을 사용하여 저장 프로시저 호출
    result = db.execute(
        text("""
            CALL SP_GET_INVERTLST(:_UNTID, :_PWRID)
        """),
        {"_UNTID": untid, "_PWRID": pwrid}  # 파라미터 값 전달
    )

    # 결과를 가져오기
    rows = result.fetchall()  # 여러 행을 반환받기
    return rows
