FROM node:18-alpine

WORKDIR /app

# Add development packages
RUN apk add --no-cache python3 make g++

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate TypeScript declarations if needed
RUN npm install --save-dev @types/react @types/react-dom

# Expose port 3000
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "start"]
