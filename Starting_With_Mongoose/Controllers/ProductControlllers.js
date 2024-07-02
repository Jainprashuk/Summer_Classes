import { ProductModel } from "../models/ProductModel.js";

const GetProducts = async (req, res) => {
  const data = await ProductModel.find();
  res.json({
    status: "success",
    data: data,
  });
};

const PostProducts = async (req, res) => {
  try {
    const newdata = req.body;
    const newproduct = await ProductModel.create(newdata);
    res.json({
      status: "success",
      data: {
        prduct: newproduct,
      },
    });
  } catch (error) {
    console.log("error :", error);
  }
};

const PutData = async (req, res) => {
  try {
    const { id } = req.params;
    const newdata = req.body;

    // const usertoupdate = await ProductModel.findById(id);

    // if (!usertoupdate) {
    //   return res.send({
    //     status: "fail",
    //     description: "No User Found",
    //   });
    // }

    // for (let key in newdata) {
    //   usertoupdate[key] = newdata[key];
    // }

    // await usertoupdate.save();

    const newproduct = await ProductModel.findOneAndReplace({_id : id} , newdata , {new : true})

    res.json({
      status: "success",
      description: "User updated",
      prduct : newproduct
    });
  } catch (err) {
    res.status(500).send({
      status: "error",
      description: err.message,
    });
  }
};

export { GetProducts, PostProducts, PutData };
