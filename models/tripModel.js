const Sequelize = require('sequelize')
const db = require('../db.js')

const Trip = db.define('Trip', {
    destinationName: { type: Sequelize.STRING, allowNull: false },
    agencyName: { type: Sequelize.STRING, allowNull: false },
})

module.exports = Trip