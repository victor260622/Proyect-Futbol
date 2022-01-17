const scrap = require("./scrapping");

class Robot {
  constructor(model) {
    this.model = model;
  }

  async schedule(robotmili) {
    setInterval(() => {
      const dataScrap = await scrap();
      await this.model
        .findOneAndUpdate({}, dataScrap, { upsert: true })
        .lean()
        .exec();
    }, robotmili);
  } 


}


module.exports = Robot;