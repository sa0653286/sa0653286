const express = require('express');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Seed the database with initial data
async function seed() {
    try {
        await Product.deleteMany();

        const products = [
            {
                name: "Organic Vegetable Box",
                description: "A box of fresh, seasonal, and organically grown vegetables, delivered straight from our farm to your table.",
                image: "https://via.placeholder.com/300x300.png?text=Organic+Vegetable+Box",
                price: 25.99
            },
            {
                name: "Free-Range Eggs",
                description: "A dozen of our finest free-range eggs, laid by happy hens that roam freely in our pastures.",
                image: "https://via.placeholder.com/300x300.png?text=Free-Range+Eggs",
                price: 5.99
            },
            {
                name: "Artisanal Honey",
                description: "A jar of our delicious, raw, and unprocessed honey, harvested from our own beehives.",
                image: "https://via.placeholder.com/300x300.png?text=Artisanal+Honey",
                price: 12.99
            },
            {
                name: "Sourdough Bread",
                description: "A freshly baked loaf of our signature sourdough bread, made with organic flour and a traditional starter.",
                image: "https://via.placeholder.com/300x300.png?text=Sourdough+Bread",
                price: 7.99
            }
        ];

        await Product.insertMany(products);
        console.log('Database seeded!');
    } catch (err) {
        console.error(err.message);
    }
}

seed();
