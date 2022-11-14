const { MongoClient } = require("mongodb");
var username = encodeURIComponent("super");
var password = encodeURIComponent("super123");
const uri = process.env.MONGO_URI || `mongodb://${username}:${password}@54.176.23.12:27017/attelier-product-db`;
const source = process.env.DATABASE || 'attelier-product-db';

module.exports = {
  getAllProducts: async (req, res) => {
    console.log('GET ALL PRODUCTS ROUTE HIT');
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    try {
      let products = await client.db(source).collection('products').find({}).toArray();
      res.json(products);
    } finally {
      await client.close();
    }
  }
};
