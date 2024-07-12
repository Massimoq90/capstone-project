const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const CityModel = require('../models/citySchemaAdd.js');


router.get("/", async (req, res) => {
    try {
        const cities = await CityModel.find();
        return res.status(200).json(cities);
    }catch(err) {
        return res.status(500).json({ message: 'Errore in recupero città', error: error })
    }
    

});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const city = await CityModel.findById(id);
        return res.status(200).json(city);
    } catch (error) {
        return res.status(500).json({ message: 'citta non trovata', error: error })
    }

})

  router.post('/', async (req, res) => {
    const {city, province} = req.body

    const newCity = new CityModel({
        city, province
    })
    try{
        const cityToSave = await newCity.save();
        return res.status(201).json(cityToSave);
    } catch (error) {
        if(error.name ==="ValidationError") return res.status(400).json({message: error.message});
        return res.status(500).json({message: 'Problemi nella creazione di una città', error: error})
    }
  })


  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { city, province } = req.body;

    try {
        const cityToUpdate = await CityModel.findByIdAndUpdate(id, { city, province }, { new: true });
        return res.status(200).json(cityToUpdate);
    } catch (error) {
        if (error.name === "ValidationError") return res.status(400).json({ message: error.message });
        return res.status(500).json({ message: 'Issues updating the city', error: error });
    }
});


  router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deletedCity = await CityModel.findByIdAndDelete(id);
        if (!deletedCity) {
            return res.status(404).json({ message: 'City not found' });
        }
        return res.status(200).json({ message: 'City deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting city', error: error });
    }
});


module.exports = router;