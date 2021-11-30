const express  = require("express");
const router = express.Router();
const ipCartoonServ  = require("../../services/ipCartoonServ");
const {asyncHandler} = require("../getSendResult");

router.get("/",asyncHandler(async (req,res)=>{
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    return await ipCartoonServ.getIpCartoons(page,limit);
}))

module.exports = router;