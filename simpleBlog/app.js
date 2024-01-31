require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');

// const connectDB = require('./server/config/db.js');

const app = express();
const PORT = 5000 || process.env.PORT;

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/blogSite');


// middleware for search
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./server/routes/main'));



app.listen(PORT, () => {
    console.log(`App listenting on port ${PORT}`)
});