const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin') ;
const { body, validationResult } = require('express-validator');
const JWT_SECRET = "@@@@";



// Route-01 : For Admin Creation
router.post('/create', [
    body('adminname', 'Enter a Valid Username').isLength({ min: 3 }),
    body('email', ' Enter correct Email').isEmail(),
    body('password', 'Password must be 8 character long').isLength({ min: 8 }),
    body('mobileno', 'Enter a valid mobile number').isMobilePhone(),

], async (req, res) => {

    // validate User Request
    const result = validationResult(req);

    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }

    try {

        // Checking User in database
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            return res.status(400).json({ errors: "User with this email already exist" });
        }

        // Hashing the password with salt ---> using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        // Creating user 
        admin = await Admin.create({
            adminname: req.body.adminname,
            email: req.body.email, 
            password: hashedPass, 
            mobileno: req.body.mobileno
        })

        const Data = {
            id: admin.id
        }

        // Forming JWT auth. token for user
        const authToken = jwt.sign(Data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went Wrong!");
    }

});

module.exports = router;

