# FROM node:18-alpine
FROM node:18-slim

WORKDIR /src

# COPY package*.json ./

COPY . .
RUN rm -rf node_modules package-lock.json

RUN npm install
# RUN npm install @rollup/rollup-linux-x64-gnu --save-optional

#########################################################빌드 실패##############################################################
#  @rollup/rollup-linux-x64-gnu 모듈 이슈
RUN npm run build

# CMD ["sh", "-c", "echo Build complete. Files available in /src/dist"]
CMD ["sh", "-c", "echo Build complete. Files available in /src/dist && tail -f /dev/null"]