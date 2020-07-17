import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

export default mongoose.model('posts', PostSchema);