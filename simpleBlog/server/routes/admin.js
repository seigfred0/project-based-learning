const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt'); // encrypt and decrypt passwords
const jwt = require('jsonwebtoken'); // helps with the cookie

const adminLayout = '../views/layouts/admin'

router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJs & MongoDB"
        }
        
        res.render('admin/index', {locals, layout: adminLayout});
        
    } catch (error) {
        console.log(error);
    }

});

/*
-- POST
-- Admin - Login Page
*/

router.post('/admin', async (req, res) => {
    try {
    
        const { username, password } = req.body;
        console.log(req.body)
    
        res.render('admin/index', {layout: adminLayout});
        
    } catch (error) {
        console.log(error);
    }

});


/*
-- POST
-- Admin - Register Page
*/

router.post('/register', async (req, res) => {
    try {
    
        const { username, password } = req.body;
        console.log(req.body)
    
        res.render('admin/index', {layout: adminLayout});  
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;