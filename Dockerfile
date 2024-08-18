FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Create and declare npm cache location
ENV npm_config_cache=/usr/src/app/npm-cache
RUN mkdir npm-cache

# Copy repository files
COPY . .

# Install dependencies
RUN npm install --cache /usr/src/app/npm-cache

# Build typescript into javascript
RUN npm run build

# Set workspace owner to node:node
RUN chown -R 1000:1000 /usr/src/app
USER node

EXPOSE 3000
CMD [ "npm", "run", "start" ]