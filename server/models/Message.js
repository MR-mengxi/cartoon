const sequelize = require("./db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define("Message",{
    avatar:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nickname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    time:{
        type:DataTypes.STRING,
        allowNull:false
    }
})