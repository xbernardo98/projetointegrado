var Sequelize = require('sequelize');
const sequelize = new Sequelize(
'df43edtv6v0deo',  
'ooghnsmfqxycne',
'518db8eff26db3f5d83eacd239329689ce6d93a41dd74aea8694596c329a4f33',
{
host: 'ec2-50-19-26-235.compute-1.amazonaws.com',
port: '5432',
dialect: 'postgres'
}
);
module.exports = sequelize;  