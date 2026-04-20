# Use Node.js
FROM node:20

WORKDIR /app

# Copy package.json first (install dependencies)
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
