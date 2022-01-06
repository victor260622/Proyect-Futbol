
const axios = require("axios").default;

/* const axiosGet = async function()  {
    return await axios.get("https://www.futbolargentino.com/primera-division/tabla-de-posiciones");

}; */
module.exports = () => {
    return axios.get("https://www.futbolargentino.com/primera-division/tabla-de-posiciones");
};


