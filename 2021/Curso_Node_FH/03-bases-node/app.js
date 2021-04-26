

const fs = require('fs');


console.clear();


const base = 5;
let salida = '';

console.log('=================');
console.log(`== Tabla del ${base} ==`);
console.log('=================');

for (let index = 1; index <= 10; index++) {
    salida += `${base} x ${index} = ${base * index}\n`;
}


console.log(salida);


fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`);
})

