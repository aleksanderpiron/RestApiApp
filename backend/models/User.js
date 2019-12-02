const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    creationDate:{
        type:Date,
        required:true
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
})

module.exports = mongoose.model('User', userSchema);