FROM denoland/deno:latest

# Create working directory
WORKDIR /app

# Copy source
COPY . .

# Compile the main app
RUN deno cache server.ts

# Run the app (enable Node compatibility and unstable features)
CMD ["deno", "run", "--allow-all", "server.ts"]
