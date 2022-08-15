const router = require('express').Router();
const productRoute=require('./api/product')
router.use('/product',productRoute)

module.exports=router