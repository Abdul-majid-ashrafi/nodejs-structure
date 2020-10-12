module.exports = {
    errors: require('./errors'),

    responseJsonHandler: (error, data, expressResponse) => {
        let obj = { error: error, data: data };
        if (obj.error) {
            expressResponse.json(obj.error);
        } else {
            expressResponse.json(obj.data);
        }
    }

};
