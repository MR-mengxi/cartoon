const express = require("express");
const router = express.Router();
const listServ = require("../../services/listServ");
const { asyncHandler } = require("../getSendResult");

router.get("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    return await listServ.getList(page, limit);
}))

module.exports = router;