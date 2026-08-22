const fs = require('fs');
const path = require('path');
const db = require('./db');

// List of subject markdown files to process
const filesToProcess = [
  { file: 'os_interview_questions.md', subject: 'OS' },
  { file: 'cn_interview_questions.md', subject: 'CN' },
  { file: 'dbms_interview_questions.md', subject: 'DBMS' },
  { file: 'oops_interview_questions.md', subject: 'OOPS' }
];

/**
 * Phase 9.2: Determines interview frequency score (1-3) based on category & question text.
 * High Frequency (3), Low Frequency (1), Default (2).
 */
function determineFrequency(category, questionText) {
  const combined = (category + ' ' + questionText).toLowerCase();
  
  const highKeywords = [
    'deadlock', 'memory', 'transaction', 'normalization', 'tcp', 'osi', 
    'polymorphism', 'inheritance', 'paging', 'semaphore', 'mutex', 'index', 
    'acid', 'process', 'thread', 'virtual memory', 'cpu scheduling', 'ip', 
    'socket', 'class', 'object', 'interface', 'encapsulation', 'abstraction', 
    'join', 'primary key', 'foreign key', 'http', 'dns', 'handshake', 'concurrency'
  ];
  for (const kw of highKeywords) {
    if (combined.includes(kw)) return 3;
  }

  const lowKeywords = [
    'real-time', 'distributed', 'security', 'wireless', 'hardware', 
    'historical', 'exokernel', 'unikernel', 'seccomp', 'selinux', 'lamport'
  ];
  for (const kw of lowKeywords) {
    if (combined.includes(kw)) return 1;
  }

  return 2;
}

/**
 * Phase 9.2: Universal Difficulty Heuristic.
 */
function determineDifficulty(category, questionText) {
  const qLower = questionText.toLowerCase();
  const catLower = category.toLowerCase();

  const hardKeywords = [
    'algorithm', 'time complexity', 'space complexity', 'implement', 
    'deadlock', 'numerical', 'anomaly', 'anomalies', 'b-tree', 'banker', 
    'concurrency', 'subnet', 'optimization', 'tricky', 'classical synchronization'
  ];
  for (const kw of hardKeywords) {
    if (qLower.includes(kw) || catLower.includes(kw)) return 'Hard';
  }

  const easyKeywords = [
    'what is', 'define', 'what are', 'difference between', 'list', 
    'types of', 'give examples', 'one-liner', 'rapid fire', 'basics', 'fundamentals'
  ];
  for (const kw of easyKeywords) {
    if (qLower.includes(kw) || catLower.includes(kw)) return 'Easy';
  }

  return 'Medium';
}

function parseAndSeedMaster() {
  const questionsToInsert = [];
  let globalIdCounter = 1;

  for (const target of filesToProcess) {
    const mdFilePath = path.join(__dirname, '..', target.file);

    if (!fs.existsSync(mdFilePath)) {
      console.warn(`Warning: Markdown file not found for ${target.subject} at ${mdFilePath}. Skipping.`);
      continue;
    }

    const fileContent = fs.readFileSync(mdFilePath, 'utf-8');
    const lines = fileContent.split('\n');

    let currentCategory = null;
    let fileQuestionCount = 0;

    for (let line of lines) {
      line = line.trim();

      // Match Category Header (e.g. ## 1. OS Fundamentals & Basics)
      const catMatch = line.match(/^##\s+(\d+\.\s+.*)$/);
      if (catMatch) {
        currentCategory = catMatch[1].trim();
        continue;
      }

      // Stop extracting when reaching non-question sections
      if (line.startsWith('## Bonus') || line.startsWith('## Study Priority')) {
        currentCategory = null;
        continue;
      }

      // Match Question Line starting with number (e.g. 1. What is an OS?)
      const qMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (qMatch && currentCategory) {
        const rawText = qMatch[2].trim();

        let questionText = rawText;
        let hint = null;

        // Extract trailing parenthetical notes as hint
        const hintMatch = rawText.match(/^(.*?)\s*\(([^)]+)\)$/);
        if (hintMatch) {
          questionText = hintMatch[1].trim();
          hint = hintMatch[2].trim();
        }

        const difficulty = determineDifficulty(currentCategory, questionText);
        const frequency = determineFrequency(currentCategory, questionText);

        questionsToInsert.push({
          id: globalIdCounter++,
          subject: target.subject,
          category: currentCategory,
          question_text: questionText,
          hint: hint,
          difficulty: difficulty,
          interview_frequency: frequency
        });

        fileQuestionCount++;
      }
    }

    console.log(`Parsed ${fileQuestionCount} questions for [${target.subject}] from ${target.file}.`);
  }

  console.log(`Total questions compiled across all subjects: ${questionsToInsert.length}.`);

  // Seed database transactionally
  db.serialize(() => {
    db.run('DELETE FROM questions', (err) => {
      if (err) console.error('Error clearing questions table:', err.message);
    });

    const stmt = db.prepare(`
      INSERT INTO questions (id, subject, category, question_text, hint, difficulty, interview_frequency)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    db.run('BEGIN TRANSACTION');
    for (const q of questionsToInsert) {
      stmt.run(q.id, q.subject, q.category, q.question_text, q.hint, q.difficulty, q.interview_frequency);
    }
    db.run('COMMIT', (err) => {
      if (err) {
        console.error('Error committing database transaction:', err.message);
      } else {
        console.log(`Successfully seeded database.sqlite with ${questionsToInsert.length} questions across all Core CS subjects!`);
      }
      stmt.finalize();
    });
  });
}

parseAndSeedMaster();
