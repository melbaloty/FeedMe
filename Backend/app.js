var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config()


var usersRouter = require('./routes/usersRouter');
var restsRouter = require('./routes/restsRouter')
var ordersRouter = require('./routes/ordersRouter')
var paymentRouter = require('./routes/paymentRouter')




var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/users', usersRouter);
app.use('/rests', restsRouter);
app.use('/orders', ordersRouter);
app.use('/payment', paymentRouter);



//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.code).send(err)
});

app.listen(4000, () => console.log('server started'))

module.exports = app;
