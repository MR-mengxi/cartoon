const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Author", {
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
})