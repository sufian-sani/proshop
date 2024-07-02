import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


import products from "./data/products.js";
// import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API server running...........');
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})