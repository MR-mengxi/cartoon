const Banner = require("../models/Banner");

exports.getBanners = async function () {
    const result = await Banner.findAll({
        attributes: ["img"]
    });
    return result;
}