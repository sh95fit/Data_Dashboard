# # Nginx 이미지를 기반으로
# FROM nginx:stable-alpine

# # Certbot 설치 (원격 서버에서 설치 X)
# RUN apk update && apk add --no-cache certbot

# # Nginx 설정 파일 복사
# COPY ./nginx.conf /etc/nginx/nginx.conf

# # 인증서 자동 갱신을 위한 스크립트 추가
# COPY ./certbot.sh /usr/local/bin/certbot.sh
# RUN chmod +x /usr/local/bin/certbot.sh

# # 80과 443 포트 노출
# EXPOSE 80 443

# # Nginx 실행 및 certbot을 주기적으로 실행하기 위한 커맨드 설정
# CMD ["sh", "-c", "/usr/local/bin/certbot.sh && nginx -g 'daemon off;'"]



# 원본
# FROM nginx:stable-alpine
FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./conf.d/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]