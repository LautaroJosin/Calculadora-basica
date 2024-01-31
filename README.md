# Readme de Calculadora básica

## Aclaraciones sobre el dockerfile

1. Copio los archivos index.html, script.js y style.css al directorio predeterminado de Nginx (/usr/share/nginx html). Esto asegura que Nginx sirva estos archivos cuando el contenedor se esté ejecutando.

2. Expongo el puerto 80, que es el puerto por defecto utilizado por Nginx para servir contenido web.

## Cómo construir la imagen

> docker build -t calculadora-basica .

## Cómo ejecutar el container

> docker run -p 127.0.0.1:80:80 calculadora-basica

