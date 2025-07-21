# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# App will run on port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
