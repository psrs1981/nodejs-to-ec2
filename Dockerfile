FROM node:18.18.0

WORKDIR /app
COPY package.json ./
RUN npm ci
COPY . .
EXPOSE 3000:3000
CMD ["npm","run","start"]
