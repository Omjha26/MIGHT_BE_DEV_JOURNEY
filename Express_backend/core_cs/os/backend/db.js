const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Resolve absolute path to database.sqlite file in the backend directory
const dbPath = path.join(__dirname, 'database.sqlite');

// Open SQLite database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Successfully connected to SQLite database at:', dbPath);
  }
});

// Initialize tables inside a serialize block to execute schema creation queries sequentially
db.serialize(() => {
  // Check if questions table needs schema migration / column addition
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT NOT NULL DEFAULT 'OS',
      category TEXT NOT NULL,
      question_text TEXT NOT NULL,
      hint TEXT,
      difficulty TEXT DEFAULT 'Medium',
      interview_frequency INTEGER DEFAULT 2
    );
  `);

  // Try adding column interview_frequency if missing from old table schema
  db.run(`ALTER TABLE questions ADD COLUMN interview_frequency INTEGER DEFAULT 2;`, (err) => {
    // Ignore error if column already exists
  });

  // 2. Create 'sessions' table
  db.run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question_id INTEGER NOT NULL,
      rating INTEGER NOT NULL CHECK (rating IN (1, 2, 3)),
      time_spent_seconds INTEGER DEFAULT 0,
      hint_used INTEGER DEFAULT 0,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
    );
  `);
});

module.exports = db;
