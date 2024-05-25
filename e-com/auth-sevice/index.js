const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());
app.use('/api/auth', userRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
}).catch(err => console.error(err));
