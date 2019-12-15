const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    orderDate:{
        type:Date,
        required:true
    },
    orderData:{
        name:{
            type:String,
            required:true
        },
        surname:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        delivery:{
            type:String,
            required:true
        },
    },
    cart:{
        items: [
            {
                product:{
                    type:Schema.Types.ObjectId,
                    ref:'Product',
                    required: true
                },
                qty:{
                    type:Number,
                    required: true
                }

            }
        ],
        totalPrice: {
            type:Number,
            default: 0
        }
    }
});

module.exports = mongoose.model('Order', orderSchema);