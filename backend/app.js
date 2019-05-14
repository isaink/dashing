require('dotenv').config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require('./routes/index');
var providersRouter = require('./routes/providers');
var srvProvidersRouter = require('./routes/srvProviders');
var servicesRouter = require('./routes/services');
var portfolioRouter = require('./routes/portfolios');
var skillsProviderRouter = require('./routes/skillsProvider');
var skillsProvider = require('./routes/skills');


var app = express();
console.log('THE DIRNAME', __dirname);
// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Static file declaration
app.use(express.static(path.join(__dirname, 'frontend/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
 app.use(express.static(path.join(__dirname, 'frontend/build')));
 //
 app.get('*', (req, res) => {
   res.sendfile(path.join(__dirname = 'frontend/build/index.html'));
 })
}
//build mode


app.use('/', indexRouter);
app.use('/providers', providersRouter);
app.use('/api/srvProviders', srvProvidersRouter);
app.use('/services', servicesRouter);
app.use('/portfolio', portfolioRouter);
app.use('/skillsProvider', skillsProviderRouter);
app.use('/skills', skillsProvider);

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname+'/frontend/public/index.html'));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//test
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;
