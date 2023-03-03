const Admin = require("../models/Admin");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");


exports.register=async(req,res)=>{
    try { // request.body=newAdmin
        const { name, email, password, phone } = req.body;
        const foundAdmin = await Admin.findOne({ email });
        if (foundAdmin) {
          return res
            .status(400)
            .send({ errors: [{ msg: "Email should be unique try again !!!" }] });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // const newAdmin
        const newAdmin = new Admin({...req.body});
        newAdmin.password = hashedPassword;
        // save
    await newAdmin.save();
     // creation token
     const token = jwt.sign(
        {
          id: newAdmin._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1H" }
      );
      
    res
    .status(200)
    .send({ msg: "register successfully..", Admin: newAdmin , token});
 
        
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "canot register!!!" }] });
        
    }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // check if email exist
      const foundAdmin = await Admin.findOne({ email });
      if (!foundAdmin) {
        return res.status(400).send({ errors: [{ msg: "Bad credential !!!" }] });
      }
      const checkPassword = await bcrypt.compare(password, foundAdmin.password);
      if (!checkPassword) {
        return res.status(400).send({ errors: [{ msg: "Bad credential !!!" }] });
      }
       // creation token
    const token = jwt.sign(
        {
          id: foundAdmin._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
     
      res
        .status(200)
        .send({ msg: "login successfully..", Admin: foundAdmin ,token});
    } catch (error) {
      res.status(400).send({ errors: [{ msg: "canot login !!!" }] });
    }
  };
  
 exports.updateAdminPassword = async (req, res) => {
  const { oldPassword, password } = req.body;
  const{_id}= req.params;
  try {
    // get user
    const admin = await Admin.findById(req.params);
    if (!admin) {
        return res.status(400).send('User not found');
    }

    // validate old password
    const isValidPassword = await bcrypt.compare(oldPassword, admin.password);
    if (!isValidPassword) {
        return res.status(400).send('Please enter correct old password');
    }

    // hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // update admin password
    admin.password = hashedPassword;
    

    const updatedAdminPassword = await admin.save();

    return res.json({ admin : updatedAdminPassword});
  } catch (err) {
    return res.status(400).send('Something went wrong. Try again');
  }
};






