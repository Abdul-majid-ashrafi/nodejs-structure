import { postDatabase } from '../database';
import { errors } from '../helper';

export default class postService {

    static get() {
        return new Promise((resolve, reject) => {
            postDatabase.get()
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    static create(body) {
        let newPostObj = body.postObject || {
            title: "Node.js",
            description: "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
        };
        return new Promise((resolve, reject) => {
            postDatabase.create(newPostObj)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    static update(param, obj) {
        return new Promise((resolve, reject) => {
            const _id = param._id;
            //  document id and obj is required
            if (_id && obj) {
                postDatabase.update(_id, obj)
                    .then((response) => {
                        resolve(response);
                    }).catch((error) => {
                        reject(error);
                    })
            } else {
                // requried field not found
                reject(errors['004']);
            }
        })
    }

}
