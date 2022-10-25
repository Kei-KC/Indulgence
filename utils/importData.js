require('dotenv').config({path: './config.env'});
const fs = require('fs');
const Post = require('../models/Post');
const connectDB = require('../config/db');
const { dirname } = require('path');

connectDB;

const posts = JSON.parse(fs.readFileSync( __dirname+'/helloworld.json', 'utf-8'));

const importData = async () => {
    try {
        await Post.create(posts);
        console.log("Data loaded");
        process.exit();
    }   catch(error) {
        console.log("Loading Failed");
        console.log(error);
        process.exit(1);
    }
}

const deleteData = async() => {
    try {
        await Post.deleteMany({});
        console.log("Data deleated");
        process.exit();
    }   catch(error) {
        console.log("Delete Failed");
        console.log(error);
        process.exit(1);
    }
}


if(process.argv[2] === "--import") {
    importData();
} else if (process.argv[2] == "--delete") {
    deleteData();
}