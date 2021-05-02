
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo(argv.b, argv.l)
    .then( crearArchivo => console.log(crearArchivo, 'creado') )
    .catch( err => console.log(err) ); 