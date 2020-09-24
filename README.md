# Tienda online para la PRAC 1 de Comercio Electrónico
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

![PHP Composer](https://github.com/avantasia/tiendace/workflows/PHP%20Composer/badge.svg)


Esta es una práctica para la asignatura "Comercion Electrónico" de la UOC, de Septiembre de 2020. Su finalidad es entender el proceso de compra de una tienda online y en ningún caso está pensada para su uso en un entorno de producción.

Personalmente he aprovechado esta práctica para la exploración de Lumen en el backend, que nunca había usado antes y su interacción con Vue en el frontend mediante tokens JWT, esta implementación puede no ser perfecta y los comentarios para mejorarla son bien recibidos.

## Frameworks utilizados

[Lumen](https://lumen.laravel.com/), un framework ligero de PHP para el backend

[Vue.js](https://vuejs.org/), un framework JS para el frontend

[Bootstrap-vue](https://bootstrap-vue.org/), el conocido framework CSS BootStrap adaptado con componentes de Vue para el layout y el diseño 

## Instalacion

Por requisito de la práctica se ha utilizado 
[XAMPP](https://www.apachefriends.org/es/index.html), que incluye el servidor Apache, PHP y MariaDB listos para usar


## Inicializacion de la aplicacion

Cambiar en el fichero .env los valores
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tienda
DB_USERNAME=tienda
DB_PASSWORD=abc123.
```

a los valores adecuados para la base de datos de MariaDB que hayamos creado para el proyecto


En el directorio database/migrations se define el modelo de la base de datos en el ORM Eloquent , para que ejecute las consultas de creación de la BD hay que ejecutar el comandos

`php artisan migrate:fresh`

y para llenar la base de datos con datos generados aleatoriamente (la definición está en database\factories y database\seeders)

`php artisan db:seed`

Para generar una clave aleatoria para los tokens JWT 

`php artisan jwt:secret`
 
 Para generar el frontend hay que entrar en el directorio frontend y ejecutar
 
 `npm run-script build`
 
 aunque se incluye una versión ya actualizada con el código, si se realiza cualquier cambio hay que volver a hacer el build, tras el cual un script copiará los archivos de vue frontend/dist en las rutas adecuadas de Lumen.
 
 ## Copyright
 
 Este proyecto está licenciado con la GPL v3, se incluye una copia en el archivo LICENCE.md
 
