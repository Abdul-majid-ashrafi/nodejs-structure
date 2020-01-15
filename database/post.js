const errors = require('../core/errors');

class PostDatabase {
    constructor() {
        this.posts = [
            //default post
            {
                id: 1579076693186,
                title: "JavaScript",
                description: "JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions",
                owner: "Majid Ashraf",
                link: "www.example.com"
            }
        ];
    }

    createPost(postobject) {
        return new Promise((resolve, reject) => {
            postobject.id = Date.now();
            this.posts.push(postobject);
            resolve("Post has been create successfully");
        })
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            let postFound = undefined;
            for (let i = 0; i < this.posts.length; i++) {
                const post = this.posts[i];
                if (post.id === id) {
                    postFound = post;
                }
            }
            if (postFound) {
                resolve(postFound);
            } else {
                reject(errors["001"]);
            }
        })
    }

    getAllPost() {
        return new Promise((resolve, reject) => {
            if (this.posts) {
                resolve(this.posts);
            } else {
                reject(errors["002"]);
            }
        })
    }
}



module.exports = PostDatabase;