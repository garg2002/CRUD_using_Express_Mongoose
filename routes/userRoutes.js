const express = require('express');
const router = express.Router();

const {home, createUser, getAllUsers, deleteUser, updateUser} = require('../controllers/userController.js');

router.get('/', home);
router.post('/create-user', createUser);
router.get('/get-all-users', getAllUsers);
router.delete('/delete-user/:id', deleteUser);
router.put('/update-user/:id', updateUser);
module.exports = router;