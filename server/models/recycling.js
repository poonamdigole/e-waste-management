import { Schema, model } from "mongoose";

const recyclingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    recyclingproductimg:{
        type:String,
        required:true
    },
    recyclingproductprice:{
        type:String,
        required:true
    },
    recyclingproductquantity:{
        type:String,
        required:true
    },
    recyclingproductDescription:{
        type:String,
        required:true
    }
})

const Recyclingproduct = model("Recyclingproduct", recyclingSchema)

export default Recyclingproduct;