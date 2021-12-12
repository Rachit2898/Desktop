const mongoose=require("mongoose");
const jsonSchema=new mongoose.Schema({
    id:{
        type:String,
        
    },
    name:{
        type:String,
        
    },property:{
        type:String,
       
    },size:{
        type:String,
       
    },description:{
        type:String,
        
    }
   
})

const userDetails=mongoose.model("userDetails",jsonSchema);
module.exports=userDetails;