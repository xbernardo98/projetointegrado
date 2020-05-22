var Sequelize = require('sequelize');
const sequelize = new Sequelize(
'projeto',
'postgres',
'123',
{
host: 'localhost',
port: '5432',
dialect: 'postgres'
}
);
module.exports = sequelize;