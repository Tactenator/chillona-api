const Article = require('../models/Article');
const mongoose = require('mongoose');

const getAllArticles = async (req, res) => {
    const article = await Article.find({}).sort({ album: 1 })

    res.status(200).json(article);
}

const getArticle = async (req,res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: "No article can be found"});
    }

    const article = await Article.findById(id);
    if(!article)
    {
        return res.status(404).json({error: "No article can be found"});
    }
    res.status(200).json(article);
}

const createArticle = async (req, res) => {

    const { title, file, color, image, body, spanishArray, englishArray, soundsArray } = req.body;

    try {
        const article = await Article.create({ title, file, color, image, body, spanishArray, englishArray, soundsArray })
        res.status(200).json(article);
    }
    catch (error)
    {
        res.status(400).json({ error: error.message })
    }
}

const deleteArticle = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
    {
        return res.status(404).json({error: "No article can be found"});
    }

    const article = await Article.findOneAndDelete(id);
    if(!article)
    {
        return res.status(404).json({ error: "No article can be found" })
    }

    res.status(200).json(article);
}

const updateArticle = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) 
    {
        return res.status(404).json({error: "No article can be found"});
    }

    const article = await Article.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    
    if(!article)
    {
        return res.status(404).json({ error: "No music can be found" })
    }

    res.status(200).json(article);
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle, 
    deleteArticle, 
    updateArticle
}