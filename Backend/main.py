from fastapi import FastAPI, Request
from pydantic import BaseModel
from datetime import datetime
import json
import os

app = FastAPI()

# 로그 저장 경로 (컨테이너에서 볼륨 마운트된 디렉토리)
log_directory = os.getenv("LOG_DIRECTORY", "/app/logs")

# 로그 데이터를 받을 모델 정의


class LogData(BaseModel):
    timestamp: str
    type: str
    message: str
    videoSrc: str


@app.post("/logs")
async def log_data(log_data: LogData, request: Request):
    # 클라이언트의 IP 주소 가져오기
    client_ip = request.headers.get(
        'X-Forwarded-For', '').split(',')[0] or request.client.host

    # 로그 데이터를 파일에 저장
    date_str = datetime.now().strftime("%Y-%m-%d")
    log_file_path = os.path.join(log_directory, f"{date_str}.json")

    log_entry = log_data.dict()
    log_entry["timestamp"] = datetime.now().isoformat()
    log_entry["client_ip"] = client_ip

    # 파일이 없으면 새로 생성하고, 있으면 기존 파일에 추가
    if not os.path.exists(log_file_path):
        with open(log_file_path, 'w') as log_file:
            json.dump([log_entry], log_file, indent=4)
    else:
        with open(log_file_path, 'r+') as log_file:
            logs = json.load(log_file)
            logs.append(log_entry)
            log_file.seek(0)
            json.dump(logs, log_file, indent=4)

    return {"message": "Log saved successfully"}
