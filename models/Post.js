const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    HelloWorld: {
        type: String,
        required: [true, 'Please have a helloworld']
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;