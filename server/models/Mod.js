const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Mod", {
    modName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    macaron: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    desc:{
        type: DataTypes.STRING,
        allowNull: false
    }
})