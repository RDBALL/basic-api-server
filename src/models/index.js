'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food.schema');

// 'postgres://localhost:5432/api-app'
// 'postgres://username:password@localhost:5432/api-app'
const DATABASE_URL = process.env.DATABASE_URL;

//instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create People model with our Schema

const FoodModel = foodSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, FoodModel};