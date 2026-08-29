const express = require("express");
const app = express();
const PORT = 8001;

// 1. Built-in body parser middleware
app.use(express.json());

// 2. Custom logger middleware (Must be before routes)
const logger = require('./middleware/logger');
app.use(logger);

// 3. Route handlers
//auth request coming from the front end,
const authRouter = require('./routes/auth');
app.use('/auth',authRouter);

const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

// 404 for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
