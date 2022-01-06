const scrapping = require("cheerio");
const callJS = require("./call");

const scrap = async function () {
  let filas = [];

  const pagina = await callJS();
  const selector = scrapping.load(pagina.data);

  selector("table tbody tr").each((i, line) => {
    let columnas = [];

    selector(line).find("td").each((i, td) => { 
      if(i == 1) {
        const equipo = {
          logo: selector(td).find("a img").attr("src"),
          name: selector(td).find("a .d-none").text(),
        }
        return columnas.push(equipo);
      }
      columnas.push(selector(td).html());
    });

    filas.push(columnas);
  });

  console.log(filas[0]);
};

scrap();