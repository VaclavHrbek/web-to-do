
FROM node:latest

WORKDIR /app

COPY ./src /app

# Keep the container running for debugging
CMD ["tail", "-f", "/dev/null"]