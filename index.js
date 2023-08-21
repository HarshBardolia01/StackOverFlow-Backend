import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { connectDB } from './src/database/connectDB.js';
import router from './src/routes/index.js';

const app = express();

config({
    path: "./src/.env"
});

connectDB();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors({
    credentials :true,
    origin : 'http://localhost:3000',
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("hello, this is a stackoverflow clone backend");
})

app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});