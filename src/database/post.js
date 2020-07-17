import { errors } from '../helper';
import { PostSchema } from '../schemas';

class postDatabase {

    get() {
        return new Promise((resolve, reject) => {
            try {
                PostSchema.find({}, (error, data) => {
                    if (error) {
                        reject(errors["002"], error);
                    } else {
                        resolve(data);
                    }
                })
            } catch (error) {
                errors["003"].reason = error.message;
                reject(errors["003"]);
            }
        })
    }

    create(postobject) {
        return new Promise((resolve, reject) => {
            try {
                PostSchema.create(postobject, (error, resposne) => {
                    if (error) {
                        errors["001"].reason = error.message;
                        reject(errors["001"]);
                    } else {
                        resolve(resposne);
                    }
                })
            } catch (error) {
                errors["003"].reason = error.message;
                reject(errors["003"]);
            }
        })
    }

    update(_id, obj) {
        return new Promise((resolve, reject) => {
            try {
                // set  new: true it will be return updated document
                PostSchema.findOneAndUpdate(_id, obj, { new: true }, (error, resposne) => {
                    if (error) {
                        errors["005"].reason = error.message;
                        reject(errors["005"]);
                    } else {
                        resolve(resposne);
                    }
                })
            } catch (error) {
                errors["003"].reason = error.message;
                reject(errors["003"]);
            }
        })
    }

}



export default new postDatabase();