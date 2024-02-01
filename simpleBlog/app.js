require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');

// const connectDB = require('./server/config/db.js');

const app = express();
const PORT = 5000 || process.env.PORT;

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/blogSite');


// middleware for search
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/blogSite'
    })
}))


app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// Routes
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));



app.listen(PORT, () => {
    console.log(`App listenting on port ${PORT}`)
});