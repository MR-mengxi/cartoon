const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Shop", {
    src: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    val: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})