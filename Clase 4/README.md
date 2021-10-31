# Clase 4
_En esta clase de abarco el framework Angular_

## Comenzando 🚀

_En la carpeta `frontend` va a encontrar el ejemplo hecho en clase de angular. Para poder ejecutarlo es necesario abrir una consola como `CMD` o `git bash` en la carpeta `frontend` y ejecutar el comando._
```console
    npm install
```
_para instalar las dependencias del proyecto. Seguido de eso, puede empezar a compilar el proyecto para empezar a trabajar en el con el comando:_
```console
    ng serve
```
_en la consola empezará el proceso de compilación y al finalizar le mostrará un mensaje que dice 'Compiled successfully', una vez compilador puede abrir cualquier navegador web y entrar en http://localhost:4200/._


_En la carpeta `backend` va a encontrar el api utilizada para el ejemplo de servicios en angular. Para ejecutarlo es necesario abrir una consola como `CMD` o `git bash` en la carpeta `backend` y ejecutar el comando._
```console
    npm install
```
_para instalar las dependencias del proyecto. Seguido de eso, es necesario tener `PostgreSQL` instalador, además de crear una base de datos con el contenido del archivo `database.sql`. También, en el archivo `index.js` en la línea 11 es necesario hacer el siguiente cambio con los valores correspondientes a su conexion de postgresql:
```javascript
    const client = new Client({
        connectionString: 'postgresql://[usuario]:[contraseña]@localhost:5432/[base de datos]',
        ssl:{
            rejectUnauthorized: false
        }
    });
```
_Por último, es necesario ejecutar el siguiente comando para empezar a ejecutar el servidor:_
```console
    npm start
```
_el servidor se ejecutará en http://localhost:8081, y si usted entra en esa dirección le mostrará un mensaje que dice "Hola Mundo!"_
