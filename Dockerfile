# Use a specific version of Node as a base image
FROM node:18.16.1-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install a specific version of npm
RUN npm install -g npm@7.24.0

# Install application dependencies
RUN npm install --quiet

# Copy the entire project to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]