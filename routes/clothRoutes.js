const { addCloth, getClothById, updateCloth, deleteCloth, getAllCloth } = require('../controllers/clothControllee');
const express = require('express');
const router = express.Router();

router.post('/add-cloth', addCloth);
router.get('/get-cloths', getAllCloth);
router.get('/get-cloth/:id', getClothById);
router.put('/update-cloth/:id', updateCloth);
router.delete('/delete-cloth/:id', deleteCloth); 

module.exports = router;
