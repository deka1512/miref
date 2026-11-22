# Build the Nuxt site as static HTML/CSS/JS.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

# Serve the generated files without a Node.js runtime.
FROM nginx:1.27-alpine AS production
COPY --from=build /app/.output/public /usr/share/nginx/html
EXPOSE 80
