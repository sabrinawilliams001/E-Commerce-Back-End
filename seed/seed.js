const sequelize = require('../config/connection');
const {Product,Category,Tag,ProductTag} =require('../models');

const productData=require('./product.json')
const categoryData=require('./category.json')
const tagData=require('./tag.json')
const producttagData=require('./productTag.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     await Category.bulkCreate(categoryData);
     await Tag.bulkCreate(tagData);
     await Product.bulkCreate(productData);
     await ProductTag.bulkCreate(producttagData);
     console.log('seeding done')
    process.exit(0);
  };
  
  seedDatabase();
  