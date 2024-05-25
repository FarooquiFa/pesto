const Order = require('../models/Order');
const jwt = require('jsonwebtoken');

const placeOrder = async (req, res) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const { product_id, quantity } = req.body;
        const newOrder = await Order.create({ user_id: decoded.id, product_id, quantity });
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

const getOrders = async (req, res) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const orders = await Order.findAll({ where: { user_id: decoded.id } });
        res.json(orders);
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

const getOrder = async (req, res) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const order = await Order.findOne({ where: { id: req.params.id, user_id: decoded.id } });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = { placeOrder, getOrders, getOrder };
