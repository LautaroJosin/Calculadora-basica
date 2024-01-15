# Utiliza una imagen mínima de Nginx como base
FROM nginx:alpine

# Establece el directorio de trabajo en /app. Se establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios al directorio de trabajo de Nginx
COPY index.html /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY README.md /usr/share/nginx/html

# Expone el puerto 80 (por defecto de Nginx)
EXPOSE 80

