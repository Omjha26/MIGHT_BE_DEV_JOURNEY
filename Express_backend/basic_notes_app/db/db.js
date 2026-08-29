const Database = require('better-sqlite3')
const path = require('path')

const dbPath = path.join(__dirname , 'notes.db')

const db = new Database(dbPath);

db.exec(
    `
        CREATE TABLE IF NOT EXISTS notes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            lastUpdate DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `
);

db.exec(
    `
        create table if not exists users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    `
)

module.exports = db;