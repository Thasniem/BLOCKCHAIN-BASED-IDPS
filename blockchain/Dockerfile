# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port (optional, for Hardhat node if needed)
EXPOSE 8545

# Keep container alive so it doesn't exit immediately
CMD ["tail", "-f", "/dev/null"]
