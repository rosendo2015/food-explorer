const sqliteConnect = require("../../sqlite")
const crateUsers = require("./CreateUsers")
async function migrationsRun() {
  const schemas = [crateUsers].join("")
  sqliteConnect()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}
module.exports = migrationsRun;