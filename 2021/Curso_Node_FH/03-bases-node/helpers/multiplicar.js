
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false) =>{

    try {

        let salida = '';
        
        for (let index = 1; index <= 10; index++) {
            salida += `${base} ${'x'.red} ${index} ${'='.red} ${base * index}\n`;
        }
        
        if (listar) {
            console.log('================='.green);
            console.log('   Tabla del:'.green, colors.blue (base ));
            console.log('================='.green);

            console.log(salida);
        } 
            
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        console.log(`tabla-${base}.txt creado`);
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}

