var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const session = require("express-session");
const passport = require("./auth/local");

//Getting Routes
var indexRouter = require('./routes/index');
var providersRouter = require('./routes/providers');
var srvProvidersRouter = require('./routes/srvProviders');
var servicesRouter = require('./routes/services');
var portfolioRouter = require('./routes/portfolios');
var skillsProviderRouter = require('./routes/skillsProvider');
var skillsProvider = require('./routes/skills');
var usersRouter = require('./routes/users');


var app = express();

//auth:
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./auth/local");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("never gonna give u up"));

app.use(
  session({
    secret: "never gonna give u up",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
// end auth.


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "Itadakimasu-Dashing",
    resave: false,
    saveUninitialized: true
  })
);

//Getting user auth:
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/providers', providersRouter);
app.use('/srvProviders', srvProvidersRouter);
app.use('/services', servicesRouter);
app.use('/portfolio', portfolioRouter);
app.use('/skillsProvider', skillsProviderRouter);
app.use('/skills', skillsProvider);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
  // next(createError(404));
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
