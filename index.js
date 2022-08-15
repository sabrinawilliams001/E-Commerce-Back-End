const express=require('express')
require('dotenv').config({path:'.env'})
const app=express()
const sequelize = require('./config/connection');
const routes=require('./routes')
app.use('/api',routes)
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(3000, () => console.log('Now listening'));
  });