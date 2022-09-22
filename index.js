'use strict';

const { sequelizeDatabase, PeopleModel } = require('./src/models');

// sync database and proof of life. Creates all associated tables
sequelizeDatabase.sync()
  .then(() => console.log('connection success'))
  .catch(err => console.error(err));
