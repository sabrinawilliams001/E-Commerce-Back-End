const router=require('express').Router()
const {Product} =require('../../models')
router.get('/',async function(req,res){
    data=await Product.findAll()
    res.send(data)
})

module.exports =router