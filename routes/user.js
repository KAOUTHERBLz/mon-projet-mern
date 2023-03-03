// require express
const express= require("express");
const {register, login, updateInfos, }=require("../Controllers/user");
const isAuth = require("../middleware/isAuth");
const { validation, loginvalidation, registervalidation, editValidator } = require("../middleware/validator");

// router
const router=express.Router();

//routes user(register & login)

// register
router.post("/register",registervalidation(),validation,register);

// login

router.post("/login",loginvalidation(),validation,login);
// current user
router.get('/current',isAuth, (req,res)=>{
  res.send(req.user);
})
//update user
router.put('/:_id',editValidator(),validation,updateInfos) 
//export
module.exports= router;

