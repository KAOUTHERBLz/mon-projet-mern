// require express

const express = require("express");
const { register, login, updateAdminPassword,  } = require("../controllers/admin");
const isAuthAdmin = require("../middleware/isAuthAdmin");
const { registervalidation, validation, loginvalidation  } = require("../middleware/validator");


// 2  express router
const router = express.Router();

// register
router.post("/register",registervalidation(),validation,register)

// login
router.post("/login",loginvalidation(),validation,login)

// current admin
router.get('/current',isAuthAdmin ,(req,res)=>{
    res.send(req.admin);
    
  })
 // update password
 router.put('/password/:_id',updateAdminPassword)



module.exports=router;