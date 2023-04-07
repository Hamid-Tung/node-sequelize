const Sequelize = require("sequelize");
const sequelize = require("../dbcofig/db.js")


const User = sequelize.define("users", {
   firstname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = User;







