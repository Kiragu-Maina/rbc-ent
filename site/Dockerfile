FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css script.js /usr/share/nginx/html/
COPY logo.png logo-192.png apple-touch-icon.png favicon.ico /usr/share/nginx/html/

EXPOSE 80
