import router from "../src/routes";
import config from './config';
import mongoose from 'mongoose';
import express from "express";
const app = express();
// we imported config
// we imported router
// we imported mongoose
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

// mongoose connection
mongoose.connect(config.mongodbUrl(), { useNewUrlParser: true, useUnifiedTopology: true })



app.listen(port, () => console.log(`Server is running on  http://localhost:${port}`));

export default app;