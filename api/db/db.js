const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () =>{
    try {
        return await mongoose.connect(process.env.MONGODB), 
        console.log(`Real MongoDB is up and running`)
    } catch (error) {
        console.log(error)
    }
    
};

const saveUser = async(newUser) => {
    console.log('Real User saved to MongoDB')
    return await newUser.save()
}

const disconnection = () => {
    console.log('Real Disconnect')
    mongoose.connection.close()
}

// *Deconstruct
module.exports ={ connection, saveUser, disconnection };