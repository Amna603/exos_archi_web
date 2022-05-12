const Sequelize = require('sequelize')
const db = require('../db.js')

const Agence = db.define('Agence', {
    name: { type: Sequelize.STRING, allowNull: false },
    adress: { type: Sequelize.STRING, allowNull: false },
    telephone: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    openingHours: { type: Sequelize.STRING, allowNull: false },
    touristDestinations: { type: Sequelize.STRING, allowNull: false } // à corriger
})
/*
Agence.associate = function(models) {
    Agence.belongsTo(models.Trip, {
        foreignKey:  "agencyName" , 
        as: "name"
    });
};
*/
module.exports = Agence