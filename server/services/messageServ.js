const Message = require("../models/Message");

exports.getMessages = async function (page = 1, limit = 10, ModId) {
    const result = await Message.findAndCountAll({
        attributes: ["id", "avatar", "nickname", "content", "time", "ModId"],
        offset: (page - 1) * limit,
        limit: +limit,
        order: [
            ["time", "DESC"]
        ],
        where: {
            ModId
        }
    })
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}

exports.addMessage = async function (message){
    const ins = await Message.create(message);
    return ins.toJSON();
}