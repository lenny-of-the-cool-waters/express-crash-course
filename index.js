const path = require('path');
const express = require('express');

const port = process.env.PORT || 5000;
const app = express();
const logger = require('./middleware/Logger.js');

// Initializing middleware
// app.use(logger);

// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})