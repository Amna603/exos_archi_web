const Sequelize = require('sequelize')
const sequelize = require('../db.js');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Agence = require('../models/agenceModel');
db.Destination = require('../models/destinationModel');
db.Trip = require('../models/tripModel');
//db.Agence.hasMany( db.Destination, { foreignKey: "Agence_id" });
db.Destination.belongsTo( db.Agence, {foreignKey: "destinationName" });
db.Agence.belongsTo( db.Destination, { foreignKey: "agencyName" });

module.exports = db