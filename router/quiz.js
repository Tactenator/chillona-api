const express = require('express')
const quizController = require('../controller/quizController');

const router = express.Router()

//get all quizzes
router.get('/', quizController.getAllQuizzes);

//get specific quiz
router.get('/:id', quizController.getQuiz);

//add new quiz
router.post('/', quizController.createQuiz);

//delete quiz
router.delete('/:id', quizController.deleteQuiz);

//patch quiz
router.patch('/:id', quizController.updateQuiz);


module.exports = router; 