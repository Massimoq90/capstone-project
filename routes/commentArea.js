const express = require('express');

const router = express.Router();

const CommentsModel = require('../models/commentSchema');


router.get("/", async (req, res) => {
    try {
        const comments = await CommentsModel.find();
        return res.status(200).json(comments);
    }catch(err) {
        return res.status(500).json({ message: 'Errore in recupero commenti', error: error })
    }
    

});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const comment = await CommentsModel.findById(id);
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json({ message: 'citta non trovata', error: error })
    }

})

router.post('/', async (req, res) => {
    const { description, comment } = req.body

    const newComment = new CommentsModel({
        description, comment
    })
    try {
        const commentToSave = await newComment.save();
        return res.status(201).json(commentToSave);
    } catch (error) {
        if (error.name === "ValidationError")
            return res.status(400).json({ message: error.message });
        return res.status(500).json({ message: 'Problemi nella creazione di un Like', error: error })
    }
})

router.put('/comments/:id', async (req, res) => {
    const { description, comment } = req.body;
    try {
        const updatedComment = await CommentsModel.findByIdAndUpdate(req.params.id, { description, comment }, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        return res.status(200).json(updatedComment);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ message: 'Invalid data provided', error: error.message });
        }
        return res.status(500).json({ message: 'Error updating comment', error: error });
    }
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await CommentsModel.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting comment', error: error });
    }
});


module.exports = router;