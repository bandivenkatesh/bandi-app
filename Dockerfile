FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy entire project including .env.local
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
ENV PORT=2000

EXPOSE 2000

CMD ["npm", "run", "dev"]

