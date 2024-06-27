import express, { json } from 'express'
// import { ProductCollection , database } from './db/db.js'
import { GetProducts , PostProducts } from './controllers/ProductsControllers.js'


const app = express()
app.use(express.json())


app.get("/products" , GetProducts )

app.post('/products' , PostProducts )




app.listen(3000 , ()=>{
    console.log('server is running')
})