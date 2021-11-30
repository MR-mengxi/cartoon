const express = require("express");
const router = express.Router();
const AdminServ = require("../../services/adminServ");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

router.post("/login", asyncHandler(async (req, res) => {
    const result = await AdminServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
        // 登录成功之后，给客户端一个jwt
        let value = result.id;
        jwt.publish(res, undefined, { id: value });
    }
    return result;
}))

router.post("/", asyncHandler(async (req, res) => {
    return await AdminServ.addAdmin(req.body);
}))

router.put("/:id", asyncHandler(async (req, res) => {
    return await AdminServ.updateAdmin(req.body, req.params.id);
}))

router.get("/whoami", asyncHandler(async (req, res) => {
    return await AdminServ.getAdminById(req.userId);
}))

module.exports = router;