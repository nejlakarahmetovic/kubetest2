FROM node

WORKDIR /app

COPY package.json /app

RUN npm install 
#no need to run npm install after every change, only after changes to package.json

COPY . /app

EXPOSE 80

CMD ["node", "server.js"]