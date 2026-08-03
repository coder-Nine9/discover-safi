const database = require("better-sqlite3")
const db = new database("clients.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS CLIENTS(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name text NOT NULL,
     email text NOT NULL,
     subject text NOT NULL,
     message text  
    );`).run();



const insert = db.prepare(`insert into CLIENTS(name,email,subject,message) values (?,?,?,?);`)
const selectAll = db.prepare(`select * from CLIENTS`);

module.exports = {
    insert,
    selectAll
}