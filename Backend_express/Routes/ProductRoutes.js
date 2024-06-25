import express from 'express'

import { getproducts, addproducts , putproduct , patchproduct , deleteproduct } from '../Controllers/ProductController.js'

const productrouter = express.Router();

productrouter.route("/").get(getproducts).post(addproducts)
productrouter.route("/:id").put(putproduct).patch(patchproduct).delete(deleteproduct)

export {productrouter}