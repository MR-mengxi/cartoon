const express = require("express");
const router = express.Router();
const shopServ = require("../../services/shopServ");
const { asyncHandler } = require("../getSendResult");

router.get("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    return await shopServ.getShop(page, limit);
}))

module.exports = router;