const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/Market"
module.exports.dbConnection = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(uri)
      .then(() => {
        console.log('Connected DB successfully');
        resolve("Connected Db Successfully");
      })
      .catch(() => {
        console.log("connection with db failed");
        reject("connection with db failed");
      });
  });
};
