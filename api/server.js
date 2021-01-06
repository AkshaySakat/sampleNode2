let express = require('express');

const apiRoutes = require('./Routes/apiroutes');

const app = express();
app.use(express.json());

const cors = require('cors');

app.use('/api', apiRoutes);

  module.exports = app