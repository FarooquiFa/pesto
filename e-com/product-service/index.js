const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5001;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
}).catch(err => console.error(err));
