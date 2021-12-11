const express = require('express');
const router = express.Router();

const Student = require('../database/object');


router.get('/', (req, res) => {
    res.render('login');
})


router.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Success');
})

router.get('/register', (req, res) => {
    res.render('register');
})


router.post('/register', (req, res) => {
    //console.log(req.body.password);
    let errors = [];
    if (req.body.password === req.body.password2)
    {   
        console.log(req.body);
        res.redirect('/');
    }else{
        errors.push('Errors mismatch');
        res.render('register')
    
    }

})




module.exports = router;