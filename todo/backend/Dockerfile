FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm run build

COPY . .

EXPOSE 5000

CMD ["node", "dist/index.js"]