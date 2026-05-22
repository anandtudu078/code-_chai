import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
       const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
       console.log(`Connected to MongoDB database: ${connectioninstance.connection.host}`);
    }catch(error){
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
        throw error;
    }
};

export default connectDB;