# ========================
# run server by serving static files using nginx
# Stage 1: Build the application
# FROM node:20-alpine AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Stage 2: Serve the static files using nginx
# FROM nginx:alpine

# # Copy the built files from the previous stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose the port the app runs on
# EXPOSE 80

# # Start nginx server
# CMD ["nginx", "-g", "daemon off;"]

# =====guide to run=====
# docker build -t my-app:tag .
# docker run -d -p 24000:80 --name containername my-app:tag
# the expose port is in a view of nginx, not the app port





# ========================
# # this docker config works for direct proj folder
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5713

# Start the application
CMD ["npm", "run", "start"]
