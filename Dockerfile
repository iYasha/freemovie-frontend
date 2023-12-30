FROM node:16.17.0

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN chmod +x start.sh

EXPOSE 8080

CMD ["sh", "-c", "start.sh"]
