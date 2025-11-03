const express = require("express");
const router = express.Router()

const authRoutes = require("./src/modules/auth/authRoutes");
const userRoutes = require("./src/modules/users/userRoutes");
const passRoutes = require("./src/modules/password/passRoutes");
const productRoutes = require("./src/modules/product/productRoutes"); 


router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/password", passRoutes);
router.use("/product", productRoutes); 




module.exports = router