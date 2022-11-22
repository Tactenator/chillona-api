const express = require('express')
const articleController = require('../controller/articleController');

const router = express.Router()

//get all quizzes
router.get('/', articleController.getAllArticles);

//get specific quiz
router.get('/:id', articleController.getArticle);

//add new quiz
router.post('/', articleController.createArticle);

//delete quiz
router.delete('/:id', articleController.deleteArticle);

//patch quiz
router.patch('/:id', articleController.updateArticle);


module.exports = router; 