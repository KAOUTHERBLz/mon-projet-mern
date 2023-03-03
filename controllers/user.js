
const User =require("../models/User")
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");

exports.register= async(req,res)=>{
  try {   // req.body=newuser
    const{name,email,password,phone}=req.body
    const foundUser= await User.findOne({email})
if ( foundUser){
return res.status(400).send({errors:[{msg:"email should be unique try again!!!"}]})
}

const saltRounds=10;
const hashedPassword= await bcrypt.hash(password,saltRounds)

    // const newUser
const newUser= new User({...req.body})
newUser.password=hashedPassword
//save
await newUser.save()
// creation token
const token=jwt.sign(
    {
        id:newUser.id
    },
    process.env.SECRET_KEY,
    {expiresIn:"1h"}
)
res.status(200).send({ms:"register successfully..",user: newUser,token})

  } catch (error) {
    res.status(400).send({errors:[{msg:"can not register the user!!!"}]})
  }
};

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
    // check if email exist
    const foundUser= await User.findOne({email});
    if (!foundUser){
        return res.status(400).send({errors:[{msg: "bad credential!!!"}]});

    }
    const checkPassword=await bcrypt.compare(password,foundUser.password);
    if (!checkPassword){
        return res.status(400).send({errors:[{msg: "bad credential!!!"}]});
    }
 // creation token
 const token = jwt.sign(
    {
      id: foundUser._id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
    
    res.status(200).send({msg:"login successfully..",user: foundUser,token});
        
    } catch (error) {
        res.status(400).send({errors:[{msg: "can not login"}]});
    }
   
}
exports.updateInfos = async(req,res) =>{
    try {
        const{_id}= req.params;
        const {  name , email }  = req.body;      

        const updatedUser = await User.findOneAndUpdate(req.params, {$set:{...req.body}})     
        
      
        const updateddUser = new User({...req.body})
      
      
        
        await updatedUser.save()
         
        
        

        res.status(200).send({success : [{ msg : "Mise à jour avec succés..."}] , user : updatedUser })
        
    } catch (error) {
        res.status(400).send({ errors : [{ msg : "Impossible de mettre à jour... Réessayez"}]})
    }
 }