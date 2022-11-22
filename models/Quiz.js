const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    "title": 
    {
        type: String, 
        required: true
    },
    "file":{
        type: String, 
        required: true
    },
    "color":
    {
        type: String, 
        required: true  
    },
    "questionsArray": [{type: String, required: true}],
    "answersArray": [{type: String, required: true}],
    "correctArray": [{type: String, required: true}]
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz; 