from node:16-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install

RUN cp .env.example .env

CMD ["npm","start"]