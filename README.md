# Servidor-Express-pt2

- [x] Implemente la funcionalidad para mostrar la información de una sola entrada de la tienda. 

- [x] La URL para obtener los datos de un producto con la identificación 5 debe ser http://localhost:8080/api/products/5

Si no se encuentra una entrada para la identificación dada, el servidor debe responder con el código de estado apropiado, es decir, 404.

- [x] Implemente la funcionalidad que hace posible eliminar una sola entrada de la tienda mediante una solicitud HTTP DELETE a la URL única de esa entrada de la tienda.
Pruebe que su funcionalidad funcione con Postman o el cliente REST de Visual Studio Code.

Expanda el backend para que se puedan agregar nuevas entradas a la agenda telefónica realizando solicitudes HTTP POST a la dirección 

http://localhost:8080/api/products.


- [x] Genere una nueva id para la entrada de la tienda con la función Math.random. Use un rango lo suficientemente grande para sus valores aleatorios de modo que la probabilidad de crear identificadores duplicados sea pequeña.

- [x] Implemente el manejo de errores para crear nuevas entradas. No se permite que la solicitud se realice correctamente si:
- [x] Falta el titulo o precio
- [x] El titulo ya existe en la tienda

Responda a solicitudes como estas con el código de estado apropiado y también envíe información que explique el motivo del error, por ejemplo:

{ "errorr: "title must be unique" }
Agregue el middleware morgan a su aplicación para loguear los request de su api. Configúrelo para registrar mensajes en su consola según la pequeña configuración.
La documentación de Morgan no es la mejor y es posible que deba dedicar algún tiempo a averiguar cómo configurarla correctamente. Sin embargo, la mayor parte de la documentación del mundo cae en la misma categoría, por lo que es bueno aprender a descifrar e interpretar documentación críptica en cualquier caso.

Morgan se instala como todas las demás bibliotecas con el comando npm install morgan. La puesta en funcionamiento de Morgan ocurre de la misma manera que la configuración de cualquier otro middleware mediante el comando app.use.

### Cómo probar? 💻

[//]: <> (Pasos necesarios para probar esta funcionalidad)
Para correr el programa es necesario utilizar el comando: npm run dev 
Asi mismo se debe utilizar una Api como postman para validar el respectivo CRUD 

### Bibliografia 📖

https://juanda.gitbooks.io/webapps/content/api/creacion_de_una_api_con_nodejs.html
https://codesandbox.io/s/7ps9s?file=/src/index.js:676-1146

### Que aprendí🧠 ?

Fue necesario investigar como funciona y a que corresponde el CRUD en express asi mismo realizar un condicional que buscara los nombres de productos ya existentes para avisarle al usuario de su existencia. Para ello fue todo un reto ya que era necesario realizar un ciclo que recorriera todo el objeto hasta encontrar la posición que se repite. Por lo tanto aun queda mucho por investigar el manejo de los objetos en JavaScript 

