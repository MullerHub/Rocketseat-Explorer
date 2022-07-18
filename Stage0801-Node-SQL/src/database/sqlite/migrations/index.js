const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationsRun(){
  const schemas = [ /* schemas se refere as tabelas do BdeD */
  createUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
}

module.exports = migrationsRun;