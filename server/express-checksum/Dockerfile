# Use Node.js v12.22.9 base image
FROM node:12.22.9

# Set the working directory in the container
WORKDIR /app

# Copy the server application files from the local directory to the container
COPY . /app

# Install dependencies
RUN npm install crypto@^1.0.1 express@^4.19.2 fs-extra@^9.1.0

# Expose the port that your application runs on
EXPOSE 3002

# Specify the command to run your application
CMD ["node", "server.js"]
