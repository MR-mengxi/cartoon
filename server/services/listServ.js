const List = require("../models/List");

exports.getList = async function (page = 1, limit = 10) {
    const result = await List.findAndCountAll({
        attributes: ["id", "news"],
        offset: (page - 1) * limit,
        limit: +limit
    })

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}