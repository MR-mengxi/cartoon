const IpPlay = require('../models/ipPlay');

exports.getIpPlays = async function (page = 1, limit = 10) {
    const result = await IpPlay.findAndCountAll({
        attributes: ["id", "card", "desc", "author"],
        offset: (page - 1) * limit,
        limit: +limit
    });

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}