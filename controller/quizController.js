const Quiz = require('../models/Quiz');
const mongoose = require('mongoose');


const getAllQuizzes = async (req, res) => {
    const quiz = await Quiz.find({}).sort({ album: 1 })

    res.status(200).json(quiz);
}

const getQuiz = async (req,res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No quiz can be found"});
    }

    const quiz = await Quiz.findById(id);
    if(!quiz)
    {
        return res.status(404).json({error: "No quiz can be found"});
    }
    res.status(200).json(quiz);
}

const createQuiz = async (req, res) => {

    const { title, file, color, questionsArray, answersArray, correctArray } = req.body;

    try {
        const quiz = await Quiz.create({ title, file, color, questionsArray, answersArray, correctArray })
        res.status(200).json(quiz);
    }
    catch (error)
    {
        res.status(400).json({ error: error.message })
    }
}

const deleteQuiz = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
    {
        return res.status(404).json({error: "No quiz can be found"});
    }

    const quiz = await Quiz.findOneAndDelete(id);
    if(!quiz)
    {
        return res.status(404).json({ error: "No quiz can be found" })
    }

    res.status(200).json(quiz);
}

const updateQuiz = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
    {
        return res.status(404).json({error: "No quiz can be found"});
    }

    const quiz = await Quiz.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    
    if(!quiz)
    {
        return res.status(404).json({ error: "No music can be found" })
    }

    res.status(200).json(quiz);
}

module.exports = {
    getAllQuizzes,
    getQuiz,
    createQuiz, 
    deleteQuiz, 
    updateQuiz
}