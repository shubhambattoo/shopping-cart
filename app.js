const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productRoutes = require('./routes/product');
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/products', productRoutes);

app.all('*', (req, res, next) => {
  res.json(`Can't find ${req.originalUrl} on this server.`, 404);
});

module.exports = app;
