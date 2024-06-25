import { GetData } from "../utils/GetData.js";
import fsPromise from "fs/promises"

const getproducts = async (req, res) => {
    const products = await GetData();
  
    res.json({
      status: "success",
      data: {
        product: products,
      },
    });
}

const addproducts = async (req, res) => {
    // console.log(req.body);
    const Data = req.body;
    // console.log(Data);
  
    if (Data.name == undefined) {
      res.end("username is must");
    } else {
      const DataBaseData = await GetData();
      console.log(DataBaseData);
  
      let lastid = 0;
      if (DataBaseData.length != 0) {
        lastid = DataBaseData[DataBaseData.length - 1].id;
      }
      Data.id = lastid + 1;
  
      DataBaseData.push(Data);
      await fsPromise.writeFile("./Data.json", JSON.stringify(DataBaseData));
      res.end("Done");
    }
}

const putproduct = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    const products = await GetData();
    const productIndex = products.findIndex((product) => product.id == id);
  
    if (productIndex === -1) {
      return res.json({
        message: "Product not found",
      });
    }
  
    //   console.log(products[productIndex]);
  
    //   products[productIndex] = { ...products[productIndex], ...updatedData };
    updatedData.id = products[productIndex].id;
    products[productIndex] = updatedData;
    await fsPromise.writeFile("./data.json", JSON.stringify(products));
  
    res.json({
      status: "success",
      data: products[productIndex],
    });
  }

const patchproduct = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    const products = await GetData();
    const productIndex = products.findIndex((product) => product.id == id);
  
    if (productIndex === -1) {
      return res
        .status(404)
        .json({ status: "fail", message: "Product not found" });
    }
  
    products[productIndex] = { ...products[productIndex], ...updatedData };
    await fsPromise.writeFile("./data.json", JSON.stringify(products));
  
    res.json({
      status: "success",
      data: products[productIndex],
    });
}

const deleteproduct = async (req, res) => {
    const { id } = req.params;
  
    const products = await GetData();
    const productIndex = products.findIndex((product) => product.id == id);
  
    if (productIndex === -1) {
      return res.json({ message: "Product not found" });
    }
  
    const deletedProduct = products.splice(productIndex, 1);
    await fsPromise.writeFile("./data.json", JSON.stringify(products));
  
    res.json({
      status: "success",
      data: deletedProduct[0],
    });
 }

export {getproducts , addproducts , putproduct , patchproduct , deleteproduct}