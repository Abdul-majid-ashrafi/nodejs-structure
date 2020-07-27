import router from "../src/routes";
import config from './config';
import mongoose from 'mongoose';
import express from "express";
import cors from "cors";

const app = express();
// we imported config
// we imported router
// we imported mongoose
// we imported cors
// we imported express and set up a new express 
// instance const app = express().

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// We set up a new express.json() middleware - this
// is needed to get access to request body.
// Note: express.json() is only available in express version 4.16.0 and above

// set route in middleware
app.use(router);
// allow cors
app.use(cors());

// mongoose connection
mongoose.connect(config.mongodbUrl(), { useNewUrlParser: true, useUnifiedTopology: true })


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

export default app;
