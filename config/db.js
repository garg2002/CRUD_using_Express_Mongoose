const mongoose = require('mongoose')

const connectToDb = async ()=>{
    mongoose.connect(process.env.MONGO)
     //connect to database

     .then((conn) =>{
        console.log(`MongoDB connected with HOST: ${conn.connection.host}`);
     })

     .catch((err)=>{
            console.log(err.message);
            process.exit(1);
     })
     
}

module.exports = connectToDb;