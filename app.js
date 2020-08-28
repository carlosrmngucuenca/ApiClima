const { require } = require('yargs');


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options(
    {
        direccion:{
            alias : 'd',
            desc:'direccion de la ciudad para obtener',
            comand:true

        }
    }
).argv;

const getInfo = ( direccion) => {

    try {
        let coors = await lugar.getLugarLL(direccion);
        let temp = await clima.getClima(coors.lat,coors.lng);

    } catch (e) {
        
    }


    

}

getInfo(argv.direccion).then(mensaje => console.log(mensaje))
            .catch(e => console.log(e));


