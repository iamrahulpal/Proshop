// This page is for creating schemas and structuring the database by adding name email pass admin

import { type } from "express/lib/response";
import mongoose from "mongoose";

const orderSchema=mongoose.Schema({                      //created a schema for users
    user={
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems=[{
        name:{type:String, required:true},
        qty:{type:Number, required:true},
        image:{type:String, required:true},
        price:{type:Number, required:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Product'
        }
    }],
    shippingAddress={
        address:{type:String, required:true},
        city:{type:String, required:true},
        postalCode:{type:String, required:true},
        country:{type:String, required:true},
    },
    paymentMethod={
        type:String,
        required:true,
    },
    paymentResult={
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String},
    },
    taxPrice={
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice={
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice={
        type:Number,
        required:true,
        default:0.0
    },
    isPaid={
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false
    },
    deliveredAt:{
        type:Date
    },
},{
    timestamps:true
})

//adding schema info to User bcoz we want to make models from this schema
const Order=mongoose.model('Order', orderSchema)

export default Order