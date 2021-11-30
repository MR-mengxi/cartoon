const Mod = require("../models/Mod");

exports.getMods = async function (page = 1, limit = 8) {
    const result = await Mod.findAndCountAll({
        attributes: ["id", "modName", "color", "thumb", "author", "macaron","desc"],
        offset: (page - 1) * limit,
        limit: +limit
    });

    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}

exports.getMod = async function (id) {
    const result = await Mod.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}