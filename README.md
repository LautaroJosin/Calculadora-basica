# Readme de Calculadora básica

## Recomendaciones :

> El codigo html es mejorable 
> El codigo js tambien es mejorable, fue sacado de chatGPT

## Aclaraciones sobre el dockerfile :

> Uso la imagen oficial mínima de Nginx (nginx:alpine) como base. Esta imagen está diseñada para ser ligera y eficiente

> Copio los archivos index.html, script.js y style.css al directorio predeterminado de Nginx (/usr/share/nginx html). Esto asegura que Nginx sirva estos archivos cuando el contenedor se esté ejecutando.

> Expongo el puerto 80, que es el puerto por defecto utilizado por Nginx para servir contenido web.

## Cómo construir la imagen :

> docker build -t calculadora-basica .

## Cómo ejecutar el container :

> docker run -p 127.0.0.1:80:80 calculadora-basica

#### Notas personales : 

> ¿Como hice para guardar la app en github?

> Cree el repositorio y obtuve el enlace : git@github.com:LautaroJosin/Calculadora-basica.git

> Abri la terminal en el directorio de la app y ejecute los siguientes comandos :

1. git init
2. git add .
3. git commit -m "Primer commit"

> Luego ejecute el comando : git remote add origin <tu-enlace>

> Finalmente ejecute el comando : git push -u origin master