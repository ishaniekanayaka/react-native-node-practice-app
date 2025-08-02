//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './src/config/db.js';
import ratelimiter from './src/middleware/rateLimiter.js';

import transactionRoute from './src/routes/transactionsRoute.js';
dotenv.config();

const app = express();

app.use(ratelimiter)

app.use(express.json());
app.use((req, res, next) => {
    console.log("Hey we hit a req, the method is ", req.method);
    next();
});

const PORT = process.env.PORT || 5001;

//connectDB(process.env.DATABASE_URL);



app.use("/api/transactions", transactionRoute);
// app.use("/api/products", transactionRoute);

// app.get('/', (req, res) => {
//     res.send("It's Working 123");
// });

// app.listen(PORT, () => {
//     console.log("Server is up and running on PORT:", PORT);
// });


initDB().then (() => {
    app.listen(PORT, () => {
        console.log("Servers is up and running on PORT:", PORT);
    });
});




