const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'Test', 
    'username',
    'password',{
    dialect: 'mysql',
    host: 'localhost'
   }
);
module.exports = sequelize