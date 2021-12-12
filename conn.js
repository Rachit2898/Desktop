const mongoose=require("mongoose");
const DB = "mongodb+srv://rachit:rachit@cluster0.neale.mongodb.net/myDb?retryWrites=true&w=majority"
mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
    console.log("connection established")
}).catch((err) => {
    console.log("error",err)
})
 
module.exports=mongoose;
