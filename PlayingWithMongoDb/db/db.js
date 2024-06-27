
import { MongoClient , ServerApiVersion } from 'mongodb';
import 'dotenv/config'
const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const database = client.db("Lpu_Mern")
const ProductCollection = database.collection("products")


export {database , ProductCollection}

