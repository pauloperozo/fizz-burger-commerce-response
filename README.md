## 🍔 Fizz Burger Commerce

Este Api Creada con serverless  permite interactuar un endPoint de Producto "Product".

## Demo ☁️:
[endPoint]:
  * GET - https://vgyhyc2zd0.execute-api.us-east-1.amazonaws.com/api/welcome
  * GET - https://vgyhyc2zd0.execute-api.us-east-1.amazonaws.com/api/product
  * POST - https://vgyhyc2zd0.execute-api.us-east-1.amazonaws.com/api/product
  * GET - https://vgyhyc2zd0.execute-api.us-east-1.amazonaws.com/api/product/{id}
  * PUT - https://vgyhyc2zd0.execute-api.us-east-1.amazonaws.com/api/product/{id}
  * DELETE - https://vgyhyc2zd0.execute-api.us-east-1.amazonaws.com/api/product/{id}

## Autor ✒️

* **Paulo Perozo** - (#dev paulo) 👤💤.
* **Mini-Me** - (#ayudante) 😸 .

## Construido con 🛠️

* [Nodejs](https://nodejs.org) - Entorno de ejecuciónJS.
* [Npm](https://www.npmjs.com/) - Permite instalar diversas librerías utilizadas en el proyecto.
* [Serverless](https://www.serverless.com/) - Framework que repárate para un entorno de desarrollo front.
* [Mongo](https://www.mongodb.com/es/) - Framework que ayuda a crear interfaces de usuario interactivas.


## Pre-requisitos 📋

_Necesitas instalar lo siguiente:_ ⚠️

* Instala Nodejs 16.x o 18.x

## Deploy 🚀
_Ejecuta los siguientes pasos en orden:_

### Paso 1 Clona el repositorio: 

  ```$ git clone git@github.com:pauloperozo/fizz-burger-commerce.git --branch Develop``` ⏬

### Paso 2 Entra a la carpeta y ejecuta el siquiente comando: 

  ```$ npm install``` 📂	

Ya con estos dos pasos se tiene el código del proyecto y se instalan las dependencias.

### Paso 3 Runner del proyecto:

   ```$ npm run dev``` 
Con este comando se inicia el servicio.


# API CRUD de Productos

Esta API proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de productos.

## Endpoints

### `GET api/product`

Este endpoint devuelve un listado de todos los productos en la base de datos.

#### Parámetros

Ninguno.

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.
- Un array de objetos JSON que representan los productos en la base de datos.

### `POST api/product`

Este endpoint crea un nuevo producto en la base de datos.

#### Parámetros

- `name`: El nombre del producto.
- `type`: El tipo del producto.
- `price`: El precio del producto.
- `image`: La URL de la imagen del producto.
- `isPromotion`: Un valor booleano que indica si el producto está en promoción.
- `discount`: El descuento aplicado al producto.
- `ingredients`: Un array de ingredientes utilizados en el producto.

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.
- Un objeto JSON que representa el nuevo producto creado, que incluye un ID único generado automáticamente.

### `GET api/product/:id`

Este endpoint devuelve un producto específico en la base de datos.

#### Parámetros

- `id`: El ID único del producto que se desea obtener.

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.
- Un objeto JSON que representa el producto solicitado.

### `PUT api/product/:id`

Este endpoint actualiza un producto existente en la base de datos.

#### Parámetros

- `id`: El ID único del producto que se desea actualizar.
- Los mismos parámetros que se utilizan para crear un nuevo producto.

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.
- Un objeto JSON que representa el producto actualizado.

### `DELETE api/product/:id`

Este endpoint elimina un producto existente de la base de datos.

#### Parámetros

- `id`: El ID único del producto que se desea eliminar.

#### Respuesta

- `200 OK` si la solicitud se completó correctamente.


## TEST (Pruebas) 🚥

Los test se desarrollaron utilizando **jest** y el cliente **postman**  (se encuentran en dependencias de desarrollo)

Para ejecutar los test de **jest**, sólo debes utilizar el comando ``npm run test``` ✅.

para probarlos con **postman** solo debe cargar 📂 el archivo `APi.postman_collection.json` en el cliente, exportando collections
luego se agregara automaticamente cada una de las peticiones a los endPoint. 
mayor informacion: `https://desarrolloweb.com/articulos/como-usar-postman-probar-api`

## Docker 🐳

Ejecutar los siguientes comandos: 
```$ docker build -t api .``` ✅	
```$ docker run -p 4000:4000 api``` ✅	
💻 usar postman para testear el api desde su computador. 

## Anexo images del proyecto 📷

![Descripción de la imagen](/doc/start.png "Leyenda de la imagen")
![Descripción de la imagen](/doc/test.png "Leyenda de la imagen")
![Descripción de la imagen](/doc/out.png "Leyenda de la imagen")
![Descripción de la imagen](/doc/docker_run.png "Leyenda de la imagen")
![Descripción de la imagen](/doc/docer_explorer.png "Leyenda de la imagen")
![Descripción de la imagen](/doc/postman.png "Leyenda de la imagen")
![Descripción de la imagen](/doc/gata.jpeg "Leyenda de la imagen")