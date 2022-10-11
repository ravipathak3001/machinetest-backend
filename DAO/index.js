const { Product } = require("../schema/products");

module.exports.getProduct = async () => {
    return await Product.find();
};
