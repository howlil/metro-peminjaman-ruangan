var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const server = require('./routes/index')
const multer = require('multer')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', server.admin)
app.use('/', server.dashboard)
app.use('/', server.ajuanPeminjaman)
app.use('/', server.konfrimasi)
app.use('/', server.ruangan)
app.use('/', server.caraPeminjaman)
app.use('/', server.riwayat)
app.use('/', server.beranda)
app.use('/', server.jadwal)
app.use('/', server.peminjaman)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  } else {
    next(err);
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
