const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5002;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
}).catch(err => console.error(err));
