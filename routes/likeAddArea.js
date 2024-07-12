const express = require('express');

const router = express.Router();

const LikeModel = require('../models/likeSchema');

router.get('/items/like', async (req, res) => {
   res.json({messagge: "like ok!"})
})


router.post('/items/like', async (req, res) => {
    const { like } = req.body
    const newLike = new LikeModel({
        like
    })
    try {
        const likeToSave = await newLike.save();
        return res.status(201).json(likeToSave);
    } catch (error) {
        if (error.name === "ValidationError") return res.status(400).json({ message: error.message });
        return res.status(500).json({ message: 'Problemi nella creazione di un Like', error: error });
    }
})

router.delete('/items/like', async (req, res) => {
    const like = req.params.like;

    try {
        await LikeModel.findByIdAndDelete(like);
        return res.status(200).json({ message: 'Like deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting like', error: error });
    }
});


module.exports = router;