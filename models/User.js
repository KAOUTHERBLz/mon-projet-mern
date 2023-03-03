const mongoose = require("mongoose") ;

const {Schema , model } = mongoose ;

const UserSchema = new Schema ({

    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        
       },
    password : {
        type: String,
        required: true,
        } ,
        phone:{type: String,
        required: true,
        } ,

}, );
module.exports = User = model('user', UserSchema)