const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    "title": { type: String, required: true },
    "file":{ type: String, required: true },
    "color":{ type: String, required: true },
    "image": { type: String,  required: true },
    "spanishArray": [{type: String, required: true}], 
    "englishArray": [{type: String, required: true}],
    "soundsArray": [{type: String, required: true}]
})

const Article = mongoose.model('article', articleSchema);

module.exports = Article; 