const { responseJsonHandler } = require('../helper');
const PostService = require('../services/post');
const postService = new PostService();

class PostController {

    get(request, response) {
        let id = request.headers.id || 1579076693186;
        postService.getPost(id)
            .then((data) => {
                responseJsonHandler(null, data, response)
            }).catch((error) => {
                responseJsonHandler(error, null, response)
            })

    }

    post(request, response) {
        let newPostObj = request.body.postObject || {
            id: 1579076693111,
            title: "Node.js",
            description: "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
            owner: "Majid Ashraf",
            link: "www.example.com"
        };
        postService.createPost(newPostObj)
            .then((data) => {
                responseJsonHandler(null, data, response)
            }).catch((error) => {
                responseJsonHandler(error, null, response)
            })

    }

    getAll(request, response) {
        postService.getAllPost()
            .then((data) => {
                responseJsonHandler(null, data, response)
            }).catch((error) => {
                responseJsonHandler(error, null, response)
            })

    }
}


module.exports = PostController;