import {model, Schema} from 'mongoose'

const CertificateSchema = new Schema({
     name  :{
        type:String,
        required:true
    },
    dateOfStart:{
        type:String,
        default:0,
        unique:true,
        required:true
    },
    dateOfEnd:{
        type:String,

    },
    signature:{
        type:String,
        required:true   
    },
    signatureDetails:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
});

const Certificate = model('Certificate',CertificateSchema)

export default Certificate;