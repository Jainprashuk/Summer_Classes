import fsPromise from "fs/promises";
import express from "express";
import { GetData } from "./utils/GetData.js";
import { getproducts , addproducts , putproduct , patchproduct , deleteproduct} from "./Controllers/ProductController.js";
import { productrouter } from "./Routes/ProductRoutes.js";
const app = express();
const Port = 3000;

// internal middleware
app.use(express.json());

// app.get("/products", getproducts );
// app.post("/products", addproducts );

// app.put("/products/:id", putproduct);
// app.patch("/products/:id", patchproduct );
// app.delete("/products/:id", deleteproduct );

// app.route("/products").get(getproducts).post(addproducts)
// app.route("/products/:id").put(putproduct).patch(patchproduct).delete(deleteproduct)

//custum middleware
app.use((req , res , next)=>{
    // console.log(req.url , req.method );
    // console.log("middleware one");
    res.set({
        "response-time" : Date.now()
    })
    next();
})



app.use("/products" , productrouter)

app.listen(Port, () => {
  console.log(`Server Listning At ${Port}`);
});
