const IpPer = require('../models/ipPer');

exports.getIpPer = async function (page = 1, limit = 10) {
    const result = await IpPer.findAndCountAll({
        attributes: ["id", "card", "desc", "author"],
        offset: (page - 1) * limit,
        limit: +limit
    });

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}