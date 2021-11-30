const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("List", {
    news: {
        type: DataTypes.STRING,
        allowNull: false
    },
})