// 1 require express

const express = require("express");
const { add, getAll, getOne,  deleteProduct, editProduct } = require("../controllers/product");


// 2  express router
const router = express.Router();

// Routes
router.post("/add", add);
router.get("/getAll", getAll);
router.get("/:id", getOne);

router.delete("/:_id",  deleteProduct);
router.put("/:_id",editProduct);
// 3 export
module.exports = router;