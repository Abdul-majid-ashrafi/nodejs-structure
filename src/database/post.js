const { postSchema } = require("../schemas");
const { errors } = require('../helper');

module.exports = {

    get() {
        return new Promise((resolve, reject) => {
            try {
                postSchema.find({}, (error, data) => {
                    if (error) {
                        errors["002"].reason = error.message || "";
                        reject(errors["002"]);
                    } else if (data.length) {
                        resolve(data);
                    } else {
                        reject(errors["007"]);
                    }
                })
            } catch (error) {
                errors["003"].reason = error.message;
                reject(errors["003"]);
            }
        })
    }
}