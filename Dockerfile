# Stage 1: Base image with build arguments
FROM node:lts-alpine AS base

# Define build arguments
ARG GCP_PROJECT_ID
ARG GCP_SERVICE_ACCOUNT_EMAIL
ARG GCP_PRIVATE_KEY

# Set environment variables for runtime
ENV GCP_PROJECT_ID=$GCP_PROJECT_ID
ENV GCP_SERVICE_ACCOUNT_EMAIL=$GCP_SERVICE_ACCOUNT_EMAIL
ENV GCP_PRIVATE_KEY=$GCP_PRIVATE_KEY
ENV NODE_ENV=production

# Stage 2: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Stage 3: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

# Stage 4: Production server
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]