FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm install -g npm@latest
# RUN npm install
COPY . .

CMD ["npm", "start"]
