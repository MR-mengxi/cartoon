const sequelize = require("./db");
const { DataTypes } = require("sequelize")

module.exports = sequelize.define("Banner", {
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
})