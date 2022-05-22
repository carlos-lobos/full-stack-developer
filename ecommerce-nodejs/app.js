var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const jwt = require("jsonwebtoken")

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var categoriesRouter = require('./routes/categories');
var usersRouter = require('./routes/users');

var app = express();

app.set("secretKey","TpFinal.NodeJs.E-Commerce")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// validar token JWT
function validateToken(req,res,next){
  jwt.verify(req.headers["x-access-token"],req.app.get("secretKey"),function(error,payload){
    if(error){
      return res.status(403).json({message:error.message})
    }else{
      console.log(payload)
      req.body.payloadToken=payload
      next()
    }
  })
}
app.validateToken = validateToken

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({message:err?.message || "Ha ocurrido un error"}) // ORIGINAL: res.render('error');
});

module.exports = app;
