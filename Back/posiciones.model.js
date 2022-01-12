module.exports = function (mongoose) {
    return mongoose.model("TablaDePosicionesJson", {
        teams: [
          {
            pos: { type: String },
            team: {
              logo: { type: String },
              longName: { type: String },
              shortName: { type: String },

            },
            pj: { type: String },
            g: { type: String },
            e: { type: String },
            p: { type: String },
            gf: { type: String },
            gc: { type: String },
            dg: { type: String },
            pts: { type: String },
          },
        ],
      });

};