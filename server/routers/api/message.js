const express = require("express");
const router = express.Router();
const messageServ = require("../../services/messageServ");
const { asyncHandler } = require("../getSendResult");

router.get("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const ModId = req.query.modId || null;
    return await messageServ.getMessages(page, limit, ModId);
}))

router.post("/", asyncHandler(async (req, res) => {
    return await messageServ.addMessage(req.body);
}))

module.exports = router;