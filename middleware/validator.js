const { check, validationResult } = require("express-validator");



exports.registervalidation=()=>[
    check("name","Name is required!!").not().isEmpty(),
    check("email","enter a valid email!!").isEmail(),
    check("password","enter a valid password!!").isLength({min:6}),

]


exports.loginvalidation=()=>[
    check("email","enter a valid email!!").isEmail(),
    check("password","enter a valid password!!").isLength({min:6}),
];




exports.validation=(req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next();
  
   
};
exports.editValidator =() => [
    
    
]


exports.editPasswordValidator =() => [
    check("password" , " Entrez un mot de passe valide(Min:7)").isLength({min:7})
]

exports.validation = (req , res , next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
     }
    next();
}



