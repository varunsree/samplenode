var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var bodyParser = require("body-parser");
var schema = require("./graphql/schema");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/** get api Call */
console.log("HAIIIIIIIIII:::::", path.join(__dirname, 'public'));

app.get('/listUsers', function (req, res) {
  // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
  //    console.log( data );
  //    res.end({status:true});
  // });
  // res.status(404).end();
  res.send({message: 'Call Inside App'});

});

var { graphqlExpress, graphiqlExpress } = require("graphql-server-express");

app.use("/myapp/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/myapp/graphiql", graphiqlExpress({ endpointURL: "/myapp/graphql" }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// console.log(process.env);
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
