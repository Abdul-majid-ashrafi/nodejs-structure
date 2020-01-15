const PostDatabase = require('../database/post');
const postDB = new PostDatabase();

class PostService {

    getPost(id) {
        return new Promise((resolve, reject) => {
            postDB.getPost(id)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    getAllPost() {
        return new Promise((resolve, reject) => {
            postDB.getAllPost()
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    createPost(postObj) {
        return new Promise((resolve, reject) => {
            postDB.createPost(postObj)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }


}

module.exports = PostService;