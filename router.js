const express = require('express')

const router = express.Router()

const User = require('./user.model')
const mongoose = require('mongoose');


router.post('/form',(req,res)=>{

    User.findOne({email:req.body.email})
    .then((user) => {
        if (user) {
            res.json({error:'User already exists'});
        } else {
            const newUser = new User({
                name:req.body.name,
                email: req.body.email,
                password: req.body.password,
                phoneno: req.body.phoneno
            });

            newUser.save().then(() => {
                res.json(newUser);
            }).catch((err) => {
                res.json({ error: err.message });
            });
        }
    }).catch((err) => {
        res.json({ error: err.message });
    });



 
})

module.exports = router