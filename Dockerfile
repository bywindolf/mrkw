# Use the official Node.js image as the base image
FROM node:18-alpine AS deps

# Set working directory in container
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Create a separate build stage for the app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the app
RUN npm run build

# Final image for production
FROM node:18-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port that the app will listen to
EXPOSE 3000

# Command to run the app in production mode
CMD ["npm", "start"]