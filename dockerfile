FROM node:8.10.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]