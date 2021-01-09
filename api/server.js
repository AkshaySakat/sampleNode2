let express = require('express');

const apiRoutes = require('./Routes/apiroutes');
const favicon = require('serve-favicon');

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(favicon(path.join(__dirname,'public', 'favicon.ico')));
app.use('/api', apiRoutes);

  module.exports = app