require('dotenv').config()

module.exports = {
  // Config Database
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
  DATE: process.env.DATE,
  JWT_PRIVATE: process.env.JWT_PRIVATE,
  JWT_REFRESH: process.env.JWT_REFRESH
}