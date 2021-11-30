const express  = require("express");
const router = express.Router();
const bannerServ  = require("../../services/bannerServ");
const {asyncHandler} = require("../getSendResult");

router.get("/",asyncHandler(async (req,res)=>{
    return await bannerServ.getBanners();
}))

module.exports = router;