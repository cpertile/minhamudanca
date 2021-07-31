FROM node:12-alpine
COPY package*.json /srv
WORKDIR /srv
COPY . .
RUN npm install
CMD ["npm", "start"]