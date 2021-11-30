const express  = require("express");
const router = express.Router();
const ipPer  = require("../../services/ipPer");
const {asyncHandler} = require("../getSendResult");

router.get("/",asyncHandler(async (req,res)=>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    return await ipPer.getIpPer(page,limit);
}))

module.exports = router;