# Use an official Node runtime as a parent image
FROM node:18.17.1

WORKDIR /frontend/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
