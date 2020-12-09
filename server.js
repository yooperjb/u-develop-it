const db = require('./db/database');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// access all route files through index.js
const apiRoutes = require('./routes/apiRoutes');

// Express middleware;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);


// Default response for any other request (not found) Catch all - must be after all gets?
app.use((req,res) => {
    res.status(404).end();
});

// start the express.js server after DB connection
db.on('open', () => {
   app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
    })
});