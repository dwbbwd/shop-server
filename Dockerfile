FROM node:14.17.3-slim

ADD . /app/

WORKDIR /app

RUN npm install --registry https://registry.npm.taobao.org

CMD ["npm",'run', "dev"]