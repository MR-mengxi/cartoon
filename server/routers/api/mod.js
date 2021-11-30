const express = require("express");
const router = express.Router();
const modServ = require("../../services/modServ");
const { asyncHandler } = require("../getSendResult");

router.get("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    return await modServ.getMods(page, limit);
}))

router.get("/:id", asyncHandler(async (req, res) => {
    return await modServ.getMod(req.params.id);
}))

module.exports = router;