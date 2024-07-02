import mongoose from "mongoose"

const uri = "mongodb+srv://jainprashuk:1234@cluster0.8zj5bmi.mongodb.net/Lpu_Mern_model_testing2?retryWrites=true&w=majority&appName=Cluster0"

  
mongoose.connect(uri).then((data)=>{
  console.log("------------------db connected----------------");
}).catch((err)=>{
console.log("Error : " , err);
})

  
  // export {data}