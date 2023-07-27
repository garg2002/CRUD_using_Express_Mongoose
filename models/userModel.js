const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email:{
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true,
    },
  
});   // create schema

module.exports = mongoose.model('User', userSchema);   // export model