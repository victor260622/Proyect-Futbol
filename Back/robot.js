const scrap = require("./scrapping");
const cron = require("node-cron"); /* hacerlo como intervalo */
const { model } = require("mongoose");

class Robot {
  constructor(model) {
    this.model = model;
  }


  async schedule(robotmin) {
    cron.schedule(`0 ${robotmin} * * *`, async () => {
    
    const dataScrap = await scrap();
    const query = await this.model.findOneAndUpdate(dataScrap).lean().exec();/* model.updade(appsert) */
    
    if (query === null) {
      const modelo = new this.model(dataScrap);
      await modelo.save();
    }
    

    });
  }

}


module.exports = Robot;