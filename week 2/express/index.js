const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members')

const req = require('express/lib/request');
const res = require('express/lib/response');


const app = express();

// // init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs.engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'member app',
    members
}));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api routes
app.use('/api/members', require('./routes/api/members'));

const  PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

 