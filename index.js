const app = require('./app');
const http = require('http');

//creamos el servidor o revisar implementacion
const server = http.createServer(app);

server.listen(3003, () => {
    console.log("el servidor esta corriendo en el puerto 3003");
});