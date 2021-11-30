const express  = require("express");
const router = express.Router();
const ipPlayServ  = require("../../services/ipPlayServ");
const {asyncHandler} = require("../getSendResult");

router.get("/",asyncHandler(async (req,res)=>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    return await ipPlayServ.getIpPlays(page,limit);
}))

module.exports = router;