const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,  //name DB
    process.env.DB_USER,  // username DB
    process.env.DB_PASSWORD, // password DB
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
