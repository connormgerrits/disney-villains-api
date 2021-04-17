const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('disney', 'villains', 'dIsNeY', {
    host: 'localhost', dialect: 'mysql', port: 3306,
})

const Villains = villainsModel(connection, Sequelize)

module.exports = { Villains }

// ***THIS IS THE CONFIGURATION FILE***
// This file will/would import all models and create/export an object for them which 
// is passed the established database connection as well as the sequelize library
// (the latter parameter is included so we don't have to import the sequelize library in every model's file).