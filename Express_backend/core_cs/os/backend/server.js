const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Healthcheck endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Core CS Interview Prep Backend API is running' });
});

// Step 10: GET /api/categories?subject=OS
app.get('/api/categories', (req, res) => {
  const subject = (req.query.subject || 'OS').toUpperCase();
  const query = `
    SELECT category, COUNT(*) as count 
    FROM questions 
    WHERE UPPER(subject) = ? 
    GROUP BY category 
    ORDER BY id ASC
  `;

  db.all(query, [subject], (err, rows) => {
    if (err) {
      console.error('Error fetching categories:', err.message);
      return res.status(500).json({ error: 'Failed to retrieve categories' });
    }
    res.json({ subject, categories: rows });
  });
});

// Phase 9.3: GET /api/question/random with 9-Level Priority Matrix Calculation
app.get('/api/question/random', (req, res) => {
  const subject = (req.query.subject || 'OS').toUpperCase();
  const category = req.query.category;

  let query = `
    SELECT 
      q.*,
      COALESCE(AVG(s.rating), 0) as avg_user_rating,
      COUNT(s.id) as session_count,
      CASE 
        WHEN COUNT(s.id) = 0 THEN 3
        WHEN AVG(s.rating) < 1.5 THEN 3
        WHEN AVG(s.rating) < 2.5 THEN 2
        ELSE 1
      END as performance_weight,
      (
        q.interview_frequency * 
        (CASE 
          WHEN COUNT(s.id) = 0 THEN 3
          WHEN AVG(s.rating) < 1.5 THEN 3
          WHEN AVG(s.rating) < 2.5 THEN 2
          ELSE 1
        END)
      ) as priority_score
    FROM questions q
    LEFT JOIN sessions s ON q.id = s.question_id
    WHERE UPPER(q.subject) = ?
  `;

  const params = [subject];

  if (category) {
    query += ' AND q.category = ?';
    params.push(category);
  }

  query += `
    GROUP BY q.id
    ORDER BY priority_score DESC, RANDOM()
    LIMIT 1
  `;

  db.get(query, params, (err, row) => {
    if (err) {
      console.error('Error fetching random question with priority matrix:', err.message);
      return res.status(500).json({ error: 'Failed to fetch question' });
    }
    if (!row) {
      return res.status(404).json({ error: 'No questions found for subject criteria' });
    }
    res.json(row);
  });
});

// Step 12: POST /api/progress/rate
app.post('/api/progress/rate', (req, res) => {
  const { question_id, rating, time_spent_seconds = 0, hint_used = 0 } = req.body;

  if (!question_id || !rating || ![1, 2, 3].includes(Number(rating))) {
    return res.status(400).json({ 
      error: 'Invalid payload. question_id and rating (1=Bad, 2=Okay, 3=Nailed It) are required.' 
    });
  }

  const query = `
    INSERT INTO sessions (question_id, rating, time_spent_seconds, hint_used)
    VALUES (?, ?, ?, ?)
  `;

  const hintUsedVal = hint_used ? 1 : 0;

  db.run(query, [question_id, rating, time_spent_seconds, hintUsedVal], function (err) {
    if (err) {
      console.error('Error recording session rating:', err.message);
      return res.status(500).json({ error: 'Failed to record progress' });
    }
    res.status(201).json({
      success: true,
      message: 'Progress recorded successfully',
      session_id: this.lastID
    });
  });
});

// Step 13: GET /api/analytics
app.get('/api/analytics', (req, res) => {
  const overallQuery = `
    SELECT 
      COUNT(*) as total_sessions,
      COALESCE(SUM(time_spent_seconds), 0) as total_time_spent_seconds,
      COALESCE(AVG(rating), 0) as overall_average_rating,
      SUM(CASE WHEN hint_used = 1 THEN 1 ELSE 0 END) as total_hints_used
    FROM sessions
  `;

  const categoryQuery = `
    SELECT 
      q.subject,
      q.category,
      COUNT(s.id) as session_count,
      AVG(s.rating) as avg_rating,
      SUM(s.time_spent_seconds) as total_time_seconds
    FROM sessions s
    JOIN questions q ON s.question_id = q.id
    GROUP BY q.subject, q.category
    ORDER BY avg_rating ASC
  `;

  db.get(overallQuery, [], (err, overallStats) => {
    if (err) {
      console.error('Error computing overall analytics:', err.message);
      return res.status(500).json({ error: 'Failed to compute analytics' });
    }

    db.all(categoryQuery, [], (err, categoryStats) => {
      if (err) {
        console.error('Error computing category analytics:', err.message);
        return res.status(500).json({ error: 'Failed to compute analytics' });
      }

      const weakestCategory = categoryStats.length > 0 ? categoryStats[0].category : null;

      res.json({
        total_sessions: overallStats.total_sessions,
        total_time_spent_seconds: overallStats.total_time_spent_seconds,
        overall_average_rating: Number(overallStats.overall_average_rating.toFixed(2)),
        total_hints_used: overallStats.total_hints_used || 0,
        weakest_category: weakestCategory,
        category_breakdown: categoryStats
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
