
const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
var S = require('string');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 let zmienna = S('<a>lab3</a>').between('<a>', '</a>').s; // => 'lab3'
 response.end("string.js lub po prostu S to lekka (< 5 KB zminimalizowana i spakowana w formacie gzip) biblioteka JavaScript dla przegladarki lub dla Node.js,\nktora udostepnia dodatkowe metody String. Przykladowo mozemy uzyc konstruktora S oraz metody between ktora pozwala\nekstraktowac stringa pomiedzy lewym i prawym stringiem\nPrzyklad: S('<a>lab3</a>').between('<a>', '</a>').s zwraca: "+zmienna);
 

});
server.listen(port, hostname, () => {
 util.log(v8.getHeapStatistics());
 console.log(path.basename(__filename));
 util.log(path.join(__dirname, 'uploads','images'));
 console.log(`Server running at http://${hostname}:${port}/`);
});
