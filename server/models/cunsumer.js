import mongoose, { model,Schema } from "mongoose";

const cunsumerSchema = new Schema({
   name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    
    productImg: {
        type: String, 

    },
    

}, { timestamps: true })

const Cunsumer = mongoose.model('Cunsumer', cunsumerSchema)

export default Cunsumer