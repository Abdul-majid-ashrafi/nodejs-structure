const { postDatabase } = require("../database");
const { errors } = require("../helper");

module.exports = {

    get: async () => {
        try {
            const postRecord = await postDatabase.get();
            return postRecord;
        } catch (error) {
            if (error.code) {
                return error;
            } else {
                errors["003"].reason = error.message;
                return errors["003"];
            }
        }
    }

}
