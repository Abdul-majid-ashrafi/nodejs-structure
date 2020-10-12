// const dotenv = require('dotenv');
// // config() will read your .env file, parse the contents, assign it to process.env.
// dotenv.config();

module.exports = {
    port: process.env.PORT || 5000,
    databaseURL: process.env.DATABASE_URI || "mongodb+srv://user123:user123@defualtcluster.sdayg.mongodb.net/demo",

    // paypal: {
    //     publicKey: process.env.PAYPAL_PUBLIC_KEY,
    //     secretKey: process.env.PAYPAL_SECRET_KEY,
    // },
    // paypal: {
    //     publicKey: process.env.PAYPAL_PUBLIC_KEY,
    //     secretKey: process.env.PAYPAL_SECRET_KEY,
    // },
    // mailchimp: {
    //     apiKey: process.env.MAILCHIMP_API_KEY,
    //     sender: process.env.MAILCHIMP_SENDER,
    // }
}