const User = require('../models/userModel.js');


//homePage controller
exports.home = (req, res) => {
    res.send('Welcome to the homepage!');
};

//createUser controller
exports.createUser = async (req, res) => {
    try{
        const {name, email} = req.body

        if(!name || !email){
           throw new Error('Please enter all fields')
 
        }
        const user = await User.create({
            name, 
            email
        })
        User.findOne({email}, (err, user) => {
            if(user){
               throw new Error('User already exists')
            }
        })
    
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data:user
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message,

        })
    }
};

//getAllUsers controller
exports.getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'All users retrieved',
            data: users
        })
        if(users.length === 0){
            throw new Error('No users found')
        }
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

//deleteUser controller
exports.deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: user
        })
        if(!user){
            throw new Error('User not found')
        }
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

//updateUser controller
exports.updateUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body);

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: user
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};