const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try{
        let query = Post.find();
    } catch (error) {
        console.log(error);
    }
}