# Step 1: Base Image and Setup
FROM node:16 AS base

# Step 2: Set Environment Variables (Optional, for local testing)
# You can also use this to pass local default values for debugging if needed
# ENV GCP_PROJECT_ID="your_project_id"
# ENV GCP_SERVICE_ACCOUNT_EMAIL="your_service_account_email"
# ENV GCP_PRIVATE_KEY="your_private_key"

# Debugging: Print the environment variables to verify they are set correctly
RUN echo "GCP_PROJECT_ID: $GCP_PROJECT_ID" && \
    echo "GCP_SERVICE_ACCOUNT_EMAIL: $GCP_SERVICE_ACCOUNT_EMAIL" && \
    echo "GCP_PRIVATE_KEY: $GCP_PRIVATE_KEY"

# Rest of your Dockerfile...
# For example, install dependencies
WORKDIR /app
COPY . .
RUN npm install

# Build your application
RUN npm run build

# Add final steps...