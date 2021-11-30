const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cartoon", "root", "123123", {
    host: "localhost",
    dialect: "mysql",
    logging: null
})

// async function test() {
//     try {
//         await sequelize.authenticate;
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// test();

module.exports = sequelize;