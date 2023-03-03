
// 1 require mongoose
const mongoose = require("mongoose");
// 2 create schema
const schema = mongoose.Schema

const productSchema = new schema ({
    name : {
       type : String ,
        required : true,
    },
    description : {
        type : String ,
        required : true,
    },
    image : {
        type : String ,
        default : "",
    },

    price : Number,
},
{timestamps :true});

module.exports = product= mongoose.model("product", productSchema);