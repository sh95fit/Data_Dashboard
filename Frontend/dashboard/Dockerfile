FROM node:18-alpine

WORKDIR /src


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "echo Build complete. Files available in /app/dist"]