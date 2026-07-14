# 1. Base Image: Standard Hybrid Environment (Node.js + Python)
FROM nikolaik/python-nodejs:python3.10-nodejs20

# 2. Set environment variables
ENV DEBIAN_FRONTEND=noninteractive \
    PORT=7860 \
    HOST=0.0.0.0

# ==========================================
# 🚀 System Graphics & FFmpeg Libraries
# ==========================================
USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1 \
    libglib2.0-0 \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# 3. Create app directory and set it as working directory
WORKDIR /app

# 4. 🚀 THE FIX: Install Python Dependencies (Only LaMa Engine) as ROOT 
RUN pip install --no-cache-dir iopaint

# 5. Give full permissions to the app directory (Important for Hugging Face Spaces)
RUN chown -R 1000:1000 /app

# 6. Switch to standard user (Hugging Face Security Requirement)
USER 1000

# 7. Install Node Dependencies FIRST (Leveraging Docker Cache)
COPY --chown=1000:1000 package*.json ./
RUN npm install

# 8. Copy the actual application code
COPY --chown=1000:1000 . .

# 9. Expose the port Hugging Face requires
EXPOSE 7860

# 10. Start the Hybrid AI server
CMD ["node", "backend.js"]