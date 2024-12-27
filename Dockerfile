# Base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Set up directories
RUN mkdir -p public .next/static

# Build the application
RUN npm run build

# Production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Create necessary directories
RUN mkdir -p public .next/static

# Copy necessary files from builder
COPY --from=builder /app/public/ ./public/ || true
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next/
COPY --from=builder /app/node_modules ./node_modules/

# Set environment variables
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
