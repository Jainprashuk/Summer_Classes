import express from 'express'
import { GetProducts, PostProducts, PutData } from '../Controllers/ProductControlllers.js'

const ProductRouter = express.Router(GetProducts)

ProductRouter.route('/products').get(GetProducts)
ProductRouter.route('/products').post(PostProducts)
ProductRouter.route('/products/:id').put(PutData)

export {ProductRouter}