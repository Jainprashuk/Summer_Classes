import { GetData } from "../utils/GetData.js";
import fsPromise from "fs/promises";

// middle ware to get data
const GetDataMiddleware = async (req, res, next) => {
  let products;
  const data = await fsPromise.readFile("./data.json", "utf-8");
  try {
    products = JSON.parse(data);
  } catch (error) {
    //   console.error('Error reading or parsing data:', error);
    products = [];
  }
  req.products = products;
  next();
};

// middle ware to check id
const CheckIdMiddlewRE = async (req, res, next)=>{
    const {products} = req
    const { id } = req.params;

    const productIndex = products.findIndex((product) => product.id == id);
  
    if (productIndex === -1) {
      return res.json({
        message: "Product not found",
      });
    }

  req.id = productIndex
  next()
  
}

// middle ware to check name
const ValidateName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      res.json({
        err: "name is must",
      });
      return;
    }
    next();
};

// get fxn
const getproducts = async (req, res) => {
  //   const products = await GetData();
  const products = req.products;

  res.json({
    status: "success",
    data: {
      product: products,
    },
  });
};


// post fxn
const addproducts = async (req, res) => {
  // console.log(req.body);
  const Data = req.body;
  // console.log(Data);

  //   const DataBaseData = await GetData();
  const DataBaseData = req.products;
  console.log(DataBaseData);

  let lastid = 0;
  if (DataBaseData.length != 0) {
    lastid = DataBaseData[DataBaseData.length - 1].id;
  }
  Data.id = lastid + 1;

  DataBaseData.push(Data);
  await fsPromise.writeFile("./Data.json", JSON.stringify(DataBaseData));
  res.end("Done");
};

// Put fxn
const putproduct = async (req, res) => {
//   const { id } = req.params;
  const updatedData = req.body;

  //   const products = await GetData();

  // via GetDataMiddleware
  const products = req.products;

  // via CheckIdMiddlewRE 
  const productIndex = req.id


  updatedData.id = products[productIndex].id;
  products[productIndex] = updatedData;
  await fsPromise.writeFile("./data.json", JSON.stringify(products));

  res.json({
    status: "success",
    data: products[productIndex],
  });
};

// patch fxn
const patchproduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  //   const products = await GetData();
  const products = req.products;
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
};

// delete fxn
const deleteproduct = async (req, res) => {
  const { id } = req.params;

  //   const products = await GetData();
  const products = req.products;
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
};

export {
  getproducts,
  addproducts,
  putproduct,
  patchproduct,
  deleteproduct,
  ValidateName,
  GetDataMiddleware,
  CheckIdMiddlewRE
};
