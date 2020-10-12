const router = require("../src/routes");
const config = require("./config/dev");
// import config and router files
const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// we imported express and set up a new express 
// instance const app = express().
const app = express();
// allow cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const port = config.port;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // We set up a new express.json() middleware - this
// // is needed to get access to request body.
// // Note: express.json() is only available in express version 4.16.0 and above

// set route in middleware
app.use(router);

// mongoose connection
mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })


// Error handlers

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error.status || 500);
        res.send({
            message: error.message,
            error: error
        });
    });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.send({
        message: error.message,
        error: error
    });
});


app.listen(port, () => console.log(`Server is running on  http://localhost:${port}`));

module.exports = app;
