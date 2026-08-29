const logger = (req, res, next) => {
    // req.method gives 'GET', 'POST', 'DELETE', etc.
    // req.originalUrl gives the full requested path (e.g. '/notes' or '/notes/123')
    console.log(`[${req.method}] ${req.originalUrl}`);
    
    // Crucial: Call next() so Express passes control to the next middleware/route
    next();
};

module.exports = logger;
