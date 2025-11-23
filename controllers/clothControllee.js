const cloth = require('../models/cloth');
const mongoose = require('mongoose');



const addCloth = async (req, res) => {
    try {
        const { name, size, color, price } = req.body; 
        if(!name || !size || !color || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newCloth = new cloth({ name, size, color, price });
        await newCloth.save();
        res.status(201).json({ message: 'Cloth added successfully', cloth: newCloth });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

const getAllCloth = async (req, res) => {
    try {
        const cloths = await cloth.find();
        res.status(200).json(cloths);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }   
}

const getClothById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Cloth ID is required' });
        }
        const foundCloth = await cloth.findById(id);
        if (!foundCloth) {
            return res.status(404).json({ message: 'Cloth not found' });
        }
        res.status(200).json(foundCloth);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

const updateCloth = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, size, color, price } = req.body;
        if (!id) {
            return res.status(400).json({ message: 'Cloth ID is required' });
        }
        const updatedCloth = await cloth.findByIdAndUpdate(id, { name, size, color, price }, { new: true });
        if (!updatedCloth) {
            return res.status(404).json({ message: 'Cloth not found' });
        }
        res.status(200).json({ message: 'Cloth updated successfully', cloth: updatedCloth });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

const deleteCloth = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Cloth ID is required' });
        }
        const deletedCloth = await cloth.findByIdAndDelete(id);
        if (!deletedCloth) {
            return res.status(404).json({ message: 'Cloth not found' });
        }
        res.status(200).json({ message: 'Cloth deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    } 
}

module.exports = {
    addCloth,
    getAllCloth,
    getClothById,
    updateCloth,
    deleteCloth
}