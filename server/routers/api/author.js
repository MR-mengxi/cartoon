const express = require("express");
const router = express.Router();
const authorServ = require("../../services/authorServ");
const { asyncHandler } = require("../getSendResult");

router.get("/", asyncHandler(async (req,res) => {
    return await authorServ.getAuthors();
}))

module.exports = router;