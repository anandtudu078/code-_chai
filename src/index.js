//require('dotenv').config({path: '.env'});
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';

import connectDB from './db/index.js';


dotenv.config({ path: '.env' });



connectDB()
/*
import express from 'express';
const app = express()


( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`)
        await mongoose.connection.once('open', () => {
            console.log(`Connected to MongoDB database: ${DB_NAME}`) 
        })
        app.on('error', (err) => {console.error('Server error:', err);
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)

        })
    }catch(error){
        console.log("ERROR:", error)
        throw err
    }
})*/