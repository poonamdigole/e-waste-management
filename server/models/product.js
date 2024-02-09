import mongoose, { model,Schema } from "mongoose";

const productSchema = new Schema({
   

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    
    productImg: {
        type: String, 

    },
    description: {
        type: String,     
        default: "-"
    }

}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

export default Product