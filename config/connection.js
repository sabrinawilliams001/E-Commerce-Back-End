const Sequlize=require('sequelize');
console.log('db=>',process.env.DB_USER)
const sequelize=new Sequlize(process.env.DB,process.env.DB_USER,process.env.PASS,{dialect:'mysql',host:'localhost'});
module.exports=sequelize
