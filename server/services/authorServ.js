const Author = require("../models/Author");

exports.getAuthors = async function () {
    const result = await Author.findAll({
        attributes: ["id", "avatar", "author"]
    });
    return result;
}