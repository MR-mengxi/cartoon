const express = require("express");
const router = express.Router();
const cardServ = require("../../services/cardServ");
const {asyncHandler} = require("../getSendResult");

router.get("/",asyncHandler(async (req,res)=>{
    return await cardServ.getCards();
}))

module.exports = router;