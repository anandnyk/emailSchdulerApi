require("dotenv").config();
const Sequelize = require('sequelize');
const sequelize = require('../connection/db');

// Table model
const Email = sequelize.define(process.env.TABLE_NAME, {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    receiver: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sender:{
        type: Sequelize.STRING,
        allowNull: false
    },
    subject:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.STRING,
        allowNull: false
    },
    scheduled_Time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    modelName: "Email"
});

// sync Model
sequelize.sync().then(success => {
    console.log("Database & tables created!");
}).catch(error => {
    console.error("Unable to create Database & Tables: ", error);
});

module.exports = Email