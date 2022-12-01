# Programacion-Web-I #
    
    Desarrollo durante el curso de Programación Web I

## Plantilla Default Html ##

    Escribir -> html:5 y te escribe el propio visual studio un archivo default de HTML

## Abrir server en tiempo real local ##

    Instalar la extensión de Live Server y botón derecho "Open with Live Server"

## Cambiar archivo Hosts ##

    Ruta de "hosts":  C:\Windows\System32\drivers\etc

    Esto sirve para cambiar las direcciones IPs de los dominios.

## Debug ##

    - [Debug](https://es.javascript.info/debugging-chrome)

## Docker ##

    Buscar imagen: docker search ubuntu
    Instalar imagen: docker pull ubuntu
    Buscar imagenes: docker images
    Crear contenedor: docker run -it ubuntu (El -it es para abrir el contenedor)
    Salir del la linea de comandos: exit
    Mirar contenedores: docker ps -a
    Correr un contenedor: docker start 59f52dc30789
    Ejecutar el contenedor y abrir consola: docker exec -it 59f52dc30789 bash
    Parar contenedor: docker stop 59f52dc30789

## Redis ##

    - Base de datos que funciona en memoria

    - Para instalarlo npm install redis

    $ sudo apt-get update
    $ sudo apt install redis
    $ redis-cli --version
    $ sudo service --status-all
    $ sudo service redis-server start
    $ redis-cli

    - Para ver claves: $ KEYS *