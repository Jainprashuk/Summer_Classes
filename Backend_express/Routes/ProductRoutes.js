import express from 'express'

import { getproducts, addproducts , putproduct , patchproduct , deleteproduct , ValidateName, GetDataMiddleware , CheckIdMiddlewRE} from '../Controllers/ProductController.js'

const productrouter = express.Router();


productrouter.use(GetDataMiddleware)


productrouter.route("/").get(getproducts).post(ValidateName , addproducts)

// productrouter.use(CheckIdMiddlewRE)
productrouter.route("/:id").put(CheckIdMiddlewRE , ValidateName , putproduct).patch(patchproduct).delete(deleteproduct)

export {productrouter}