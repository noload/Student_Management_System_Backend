FROM node:20
WORKDIR /student_database_management
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]