const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../Models/Users");

require("dotenv").config();
const JWTSECRETKEY = process.env.JWTSECRETKEY;

const router = express.Router();

router.post('/register', async (req, res) => {
    const { userName, password } = req.body;
    
    try {
        let user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ msg: "User Already Exists." });
        }

        user = new User({ userName, password});

        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: { id: user.id }
        };

        jwt.sign(payload, JWTSECRETKEY, { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error.");
    }
});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    
    try {
        let user = await User.findOne({ userName });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials." });
        }

        const payload = {
            user: { id: user.id }
        };

        jwt.sign(payload, JWTSECRETKEY, { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error.");
    }
});

module.exports = router;