var Sequelize = require('sequelize');
const sequelize = new Sequelize(
'd1ub2l1id4jhbn',  
'etqpiywanzetqb',
'611b8dd8cb41875b55d4ab110f93dc0424fa22eb68a23c2fbc8a9e0abce26035',
{
host: 'ec2-176-34-123-50.eu-west-1.compute.amazonaws.com',
port: '5432',
dialect: 'postgres'
}
);
module.exports = sequelize;  