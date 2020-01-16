module.exports = class Helper {

    static responseJsonHandler(error, data, expressResponse) {
        let obj = { error: error, data: data };
        if (obj.error) {
            expressResponse.json({ "error": obj.error });
        } else {
            expressResponse.json({ "data": obj.data });
        }
    }

};
