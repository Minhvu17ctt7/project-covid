const createError = require('http-errors');
const express = require('express');

const middleware = require('./middleware');
const route = require('./routes');
const db = require('./db');
const app = express();

middleware(app);
route(app);
db.connect();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// api error handler
app.use('/api', function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
