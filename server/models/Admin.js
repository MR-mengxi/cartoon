const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Admin", {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg"
    },
    macaron: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})