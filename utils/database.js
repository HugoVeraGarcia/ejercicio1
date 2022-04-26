//class fron library
const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (sqlite)
const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost' ,
	username: 'postgres',
	password: 'root',
	database: 'repair',
	logging: false
  });

module.exports = { db };