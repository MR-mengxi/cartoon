const Shop = require("../models/Shop");

exports.getShop = async function (page = 1, limit = 10) {
    const result = await Shop.findAndCountAll({
        attributes: ["id", "src", "desc", "val"],
        offset: (page - 1) * limit,
        limit: +limit
    })

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}