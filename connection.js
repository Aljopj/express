// import mongoose from "mongoose"
// export default aysnc function Connection(){
//     const db=await mongoose.connect("mongodb://127.0.0.1:27017/connection")
//     return db
// }
import mongoose from 'mongoose';

export default async function connect() {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/connection', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
        return db;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error; // Re-throw the error after logging it
    }
}
