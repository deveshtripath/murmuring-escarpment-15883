const express = require("express");
const router = new express.Router();
const registers = require('../models/schema');
require('../db/conn');
const User = require('../models/schema');

router.get('/register', (req, res) => {
    res.send("value register");

});

router.get('/login', (req, res) => {
    res.send('login');
});


router.post("/register", async (req, res) => {

    try {
        // we will get the data from react form 
        const { firstname,lastname, email,gender, phone, age, password, confirmpassword } = req.body;

        // we will do validation 
        if (!firstname || !lastname || !email || !gender || !phone || !age || !password || !confirmpassword) {
            console.log(`error from the backend ${firstname}  ${password}  ${email}`);
            return res.json({ error: "Plzz fill the data properly" });
        }

        // we need to check weather the user already exists or not 
        const userEmail = await User.findOne({ email: email });

        if (userEmail) {
            console.log("email is already exists");
            return res.status(422).json({ error: "Email alredy exists" });
        } else if (password != confirmpassword) {
            console.log("password are not matching ");
            return res.status(422).json({ error: "passwords are not matching" });
        } else {
            // creating a new documents to be stored 
            const user = new User({ firstname,lastname, email,gender, phone, age, password, confirmpassword });

            // saving the data to the database 
            const userRegister = await user.save();
            console.log(`${user} user Registered successfully`);
            res.status(201).json({ message: "User Registered successfully" });
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/login', async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        
        const useremail = await User.findOne({ email });
        // res.send(useremail);
        console.log(useremail);

        if (useremail.password === password) {
            res.status(201).send(useremail);
        } else {
            res.send("password are not matching");
        }
    } catch (error) {
        res.status(400).send("invalid id")
    }
});

module.exports = router;