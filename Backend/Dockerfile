FROM python:3.11

# tzdata 설치
RUN apt-get update && \
  apt-get install -y tzdata

# 시간대 설정: Asia/Seoul (한국 시간)
RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
  dpkg-reconfigure --frontend noninteractive tzdata

# 환경변수로 TIMEZONE 설정
ENV TZ=Asia/Seoul


COPY . /src
WORKDIR /src

RUN pip install --no-cache-dir -r requirements.txt
# RUN pip install fastapi uvicorn[standard] --no-cache-dir

RUN mkdir -p /app/logs

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--reload", "--port", "8888"]