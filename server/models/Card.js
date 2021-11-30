const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Card", {
    bg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subTitle: {
        type: DataTypes.STRING,
        allowNull: false
    }
})