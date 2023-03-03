// require mongosse
const mongosse= require("mongoose");


// connect db
const connectDB= async()=>{
    try {
        // step 1
        await mongosse.connect(process.env.DB_URI);
        // step 2
        console.log("Database connected...")
        
    } catch (error) {
        console.log("Database is not connected!!!",error);
        
    }
};
module.exports=connectDB;