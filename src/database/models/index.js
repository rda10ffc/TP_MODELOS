'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate()
/* promesa, es cuando hacemos una peticion a la base de datos y no sabemos exactamente cuando va a venir la respuesta */
  .then(()=>console.log('Conexion exitosa!!'))/* espera a que venga una respuesta, recibe un callback que se va a ejecutar cuando tenga una respuesta de authenticate */
  .catch((error)=>console.log('Upss hubo un error en la conexion', error))/* si la promesa no se cumple que es lo que hago */
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
