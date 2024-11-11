# create_engine : 데이터베이스 연결을 설정하는 함수
from sqlalchemy import create_engine
# declarative_base : ORM 모델을 정의하기 위한 베이스 클래스 / SQLAlchemy ORM과 상호작용하는 메타데이터와 속성 제공
# sessionmaker() : 데이터베이스와의 세션 관리 역할 / 트랜잭션 처리 및 쿼리 실행, 데이터 삽입/업데이트 등을 담당
from sqlalchemy.orm import declarative_base, sessionmaker

from app.core.config import DATABASE_URL

engine = create_engine(DATABASE_URL)

Session = sessionmaker(
    # 해당 세션은 지정된 engine과 연결된 데이터베이스를 사용
    bind=engine,
    # 트랜잭션을 명시적으로 커밋하지 않도록 설정 (자동 커밋 방지)
    autocommit=False,
    # 쿼리 실행 전에 자동으로 변경된 데이터를 플러시하지 않도록 설정 (쿼리를 적용해야만 객체들이 데이터베이스에 반영)
    autoflush=False,
)

Base = declarative_base()
