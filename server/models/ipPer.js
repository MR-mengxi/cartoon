const sequelize = require("./db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define("IpPer", {
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