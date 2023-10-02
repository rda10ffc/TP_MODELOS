require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV,  /* nombre de usuario*/
    password: process.env.DB_PASSWORD_DEV, /* contraseña asignada */
    database: process.env.DB_DATABASE_DEV, /* nombre de la base de datos que vamos a utilizar */
    host: process.env.DB_HOST_DEV, /* direccion ip donde se vincula */
    dialect: "mysql", /* lenguaje */
    port: process.env.DB_PORT_DEV /* puerto que vamos a utilizar para ejecutarlo */
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
