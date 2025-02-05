FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install typescript

RUN npx tsc

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]