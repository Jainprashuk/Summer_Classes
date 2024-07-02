import  'dotenv/config'
import './configs/db.js'
import express from 'express'
import { ProductRouter } from './Routes/ProductRoutes.js'



const app = express()

app.use(express.json())


app.use(ProductRouter)




app.listen(process.env.PORT , ()=>{
    console.log(`------------ Server running at port ${process.env.PORT} -------------`);
})