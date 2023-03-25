const mongoose = require('mongoose');
const db = require('./database');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
    },

    password:{
        type:String,
        required:true,
    },
    
    phoneno:{
        type:Number,
        required:true,
    }
    
});

userSchema.index({ email: 1 }, { unique: false });
module.exports = mongoose.model('User',userSchema)
