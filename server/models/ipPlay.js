const sequelize = require("./db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define("IpPlay",{
    card: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
})