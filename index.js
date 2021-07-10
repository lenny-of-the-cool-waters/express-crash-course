const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars')

const port = process.env.PORT || 5000;
const app = express();
const logger = require('./middleware/Logger.js');
const router = require('./routes/api/members');
const members = require('./Members.js');

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initializing middleware
// app.use(logger);

// Homepage route
app.get('/', (req,res) => res.render('index', {
    title: "Member App",
    members
}))

// Setting static folder
app.use(express.static(path.join(__dirname, 'public')));
/* 
   NB: if static page before the index route it shall render, else index renders.
   Usually express app serve either static files, apis or templates.
   All three showcased here cause it is a crash course
*/

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});