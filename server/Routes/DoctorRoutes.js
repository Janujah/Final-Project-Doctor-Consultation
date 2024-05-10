const express = require('express');
const router = express.Router();
const userController = require('../Controller/DoctorController');

router.post('/create', userController.createUser);
router.get('/view', userController.getAllUsers);
router.get('/view/:id', userController.getUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.patch('/verify/:id', userController.patchUsers);


module.exports = router;
