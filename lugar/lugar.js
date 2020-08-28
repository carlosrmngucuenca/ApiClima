const axios  = require('axios');


const getLugarLL = async (di)=>{
    
    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr}`,
        headers: {'X-RapidAPI-Key': '8da287e4f2msha6d4f1481dae6e6p1ff21djsn5ca18e2e1d47'}
      });
    
       const resp = await instance.get();
       if (resp.data.Results === 0) {
           throw new Error(`No hay resultados para ${dir} `);
           
       }

       const data = resp.data.Results[0];
       const direccion = data.name;
       const lat = data.lat;
       const lng = data.lon;
            
        return {
            direccion,
            lat,
            lng
        }


}  



module.exports = {
    getLugarLL
}


