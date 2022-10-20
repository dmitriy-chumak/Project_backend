require('dotenv').config();

const URL_CONNECTION_DATABASE = process.env.URL_CONNECTION_DATABASE;
const PORT = process.env.PORT;

module.exports = {
  URL_CONNECTION_DATABASE,
  PORT,
}