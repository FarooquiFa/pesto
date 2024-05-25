const express = require('express');
const { placeOrder, getOrders, getOrder } = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, placeOrder);
router.get('/', auth, getOrders);
router.get('/:id', auth, getOrder);

module.exports = router;
