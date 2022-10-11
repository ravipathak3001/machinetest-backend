const mongoose = require("mongoose");

const Products = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },
});
Products.set("timestamps", true);
module.exports.Product = mongoose.model("product", Products);


