import { Helper } from '../helper';
import { postService } from '../services';

class postsController {

    get(request, response) {
        postService.get()
            .then((data) => {
                Helper.responseJsonHandler(null, data, response)
            }).catch((error) => {
                Helper.responseJsonHandler(error, null, response)
            })
    }

    create(request, response) {
        postService.create(request.body)
            .then((data) => {
                Helper.responseJsonHandler(null, data, response)
            }).catch((error) => {
                Helper.responseJsonHandler(error, null, response)
            })

    }

    update(request, response) {
        postService.update(request.params, request.body)
            .then((data) => {
                Helper.responseJsonHandler(null, data, response)
            }).catch((error) => {
                Helper.responseJsonHandler(error, null, response)
            })
    }

}

export default new postsController();