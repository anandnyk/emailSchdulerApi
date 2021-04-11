require("dotenv").config();
const Sequelize = require('sequelize');

//DB connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, { //DB name, username, password
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

// DB authentication check
sequelize.authenticate().then((success) => {
    console.log("database Connection has been established successfully!");
}).catch((error) => {
    console.error("Unable to connect to the database: ", error);
});

module.exports = sequelize