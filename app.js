import express from 'express';
import connect from './connection.js';
import env from "dotenv"
env.config()
const app = express();

app.use(express.json());

// app.get('/about', (req, res) => {
//     const { name, age } = req.query;
//     console.log(name, age);
//     res.send('hello world');
// });

// app.get('*', (req, res) => {
//     res.status(404).send('invalid page');
// });

connect() 
    .then(() => {
        console.log('Database connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server started at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });



