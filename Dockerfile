FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Copy env file
COPY .env.local .env.local

EXPOSE 2000

CMD ["npm", "run", "dev"]
