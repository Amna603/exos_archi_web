const Sequelize = require('sequelize')
const db = require('../db.js')

const Destination = db.define('Destination', {
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    containedInPlace: { type: Sequelize.STRING, allowNull: false },
    travelAgencies: { type: Sequelize.STRING, allowNull: false } // à corriger
})

Destination.associate = function(models) {
    Destination.hasOne(models.Trip, {
        foreignKey:  "destinationName" , 
        as: "name"
    });

};
module.exports = Destination