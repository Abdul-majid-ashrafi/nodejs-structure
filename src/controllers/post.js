const helper = require('../helper');
const { postService } = require("../services")

module.exports = {

    get: async (request, response) => {
        const data = await postService.get();
        if (data.code) {
            helper.responseJsonHandler(data, null, response)
        } else {
            helper.responseJsonHandler(null, data, response)
        }
    }
}