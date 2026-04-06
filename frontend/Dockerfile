# Stage 1 – "build"
FROM alpine AS builder

WORKDIR /app

COPY src/index.html .
COPY src/products.html .
COPY src/stats.html .
COPY src/styles.css .

# Stage 2 – "production"
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf


COPY --from=builder /app /usr/share/nginx/html