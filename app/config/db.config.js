const config = require("./secret.config.js");

module.exports = {
  HOST: config.HOST,
  USER: config.USER,
  PASSWORD: config.PASSWORD,
  DB: config.DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
