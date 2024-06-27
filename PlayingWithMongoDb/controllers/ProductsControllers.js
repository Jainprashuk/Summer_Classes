import { ProductCollection , database } from "../db/db.js";

const GetProducts = async (req, res) => {
  const products = await ProductCollection.find().toArray();
  const product1 = await ProductCollection.findOne();
  // res.send((products.dbName))
  res.send({
    status: "success",
    data: products,
  });
};

const PostProducts = async (req, res) => {
  const newproduct = req.body;
  if (!newproduct.name || !newproduct.price) {
    res.json({
      status: "error",
      message: "name and price are required",
    });
    return;
  }

  const result = await ProductCollection.insertOne(newproduct);
  const fdata = await ProductCollection.find().toArray();

  res.json({
    status: "success",
    data: result,
  });
};


export {GetProducts , PostProducts}