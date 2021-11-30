require("./Banner");
require("./Mod");
require("./List");
require("./author");
require("./ipCartoon");
require("./ipPlay");
require("./ipPer");
require("./Shop");
require("./Card");
require("./Message");
require("./Admin");
const sequelize = require("./db");
sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步完成");
})