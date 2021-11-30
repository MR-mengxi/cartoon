const Card = require("../models/Card");

exports.getCards = async function (){
    const result = await Card.findAll({
        attributes:["id","bg","title","subTitle"],
    });
    return result;
}