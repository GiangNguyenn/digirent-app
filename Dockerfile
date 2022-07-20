FROM node:14-alpine

WORKDIR /usr/src/app

COPY . ./

EXPOSE 3000

# install dependencies
RUN npm i

CMD ["npm", "run", "buildAndStart"]
