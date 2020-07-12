var Sequelize = require('sequelize');
const sequelize = new Sequelize(
'postgres',  
'postgres',
'bernardo98',
{
host: 'localhost',
port: '5432',
dialect: 'postgres'
}
);
module.exports = sequelize;  