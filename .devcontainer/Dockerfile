FROM node:20-bullseye

# Install git (useful for DevContainer
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Change ownership to node user
RUN chown -R node:node /workspace

# Switch to node user
USER node

# Expose Vite dev server port
EXPOSE 5173