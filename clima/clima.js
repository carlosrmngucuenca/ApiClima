const axios  = require('axios');

const getClima = async (lat , lng) => {
    const resp = await axios.get(`https://`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}