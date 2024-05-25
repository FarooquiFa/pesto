const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword, email });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { register, login };
