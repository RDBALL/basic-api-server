'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const peopleSchema = require('./person.schema');

// 'postgres://localhost:5432/api-app'
// 'postgres://username:password@localhost:5432/api-app'
const DATABASE_URL = process.env.DATABASE_URL;

//instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create People model with our Schema

const PeopleModel = peopleSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, PeopleModel};