const scrapping = require("cheerio");
const callJS = require("./call");


let scrap = async function () {
  let row = [];

  const page = await callJS();
  const selector = scrapping.load(page.data);

  selector("table tbody tr").each((i, line) => {
    let columns = [];

    selector(line).find("td").each((i, td) => {
      if (i == 1) {
        const team = {
          logo: selector(td).find("a img").attr("src"),
          name: selector(td).find("a .d-none").text(),
        }
        return columns.push(team);
      }
      columns.push(selector(td).text().trim());
    });

    row.push(columns);

  });
  /* console.log(filas.length); */

  let tableJson = row.map((x) => {
    return {
      pos: x[0],
      team: x[1],
      pj: x[2],
      g: x[3],
      e: x[4],
      p: x[5],
      gf: x[6],
      gc: x[7],
      dg: x[8],
      pts: x[9],
    };
  });


  /*  console.log(tablaJson); */
  const data = {
    teams: tableJson
  };

  console.log(JSON.stringify(data));
  return data;

};
/* scrap(); */
module.exports = scrap;