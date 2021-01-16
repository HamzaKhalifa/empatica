FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY client/package*.json ./client/

RUN npm install && npm install --prefix client

COPY . .

EXPOSE 5000

EXPOSE 3000

CMD [ "npm", "run", "dev" ]