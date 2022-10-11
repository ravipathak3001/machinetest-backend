const express = require("express");
const cors = require("cors");

const { addProduct, getProduct } = require("./DAO");
const { dbConnection } = require("./schema");
const app = express();

app.use(cors());
app.use(express.json());

// app.post("/api/order", (req, res, next) => {

//   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });

app.get("/api/products", async (req, res) => {
  const product = await getProduct();
  res.send(product);
});

let server = app.listen(8001, async () => {
  await dbConnection();
  let host = server.address().address;
  let port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
