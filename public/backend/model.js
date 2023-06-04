const mongoose = require('mongoose');
const blueprint = new mongoose.Schema({
    PostImage: String,
    name: String,
    location: String,
    description: String,
    date:String,
    likes:String
});
module.exports = mongoose.model('instagramData', blueprint)