import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB();

const app = express();


import products from "./data/products.js";
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API server running...........');
})
app.use('/api/products', productRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})