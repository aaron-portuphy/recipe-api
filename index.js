import express from 'express';
import mongoose from 'mongoose';
import recipeRouter from './routes/recipes.js';
import categoryRouter from './routes/category.js';


// Connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

//Define route
app.get('/', (req,res) =>{
    res.json('Welcome Home');
});
app.post('/login', (req,res) =>{
    res.json('Login successful');
});
app.post('/update', (req,res) =>{
    res.json('Profile Updated');
});

// Use routes
app.use(recipeRouter);
app.use(categoryRouter);

//Listen for incoming request
const port = process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log('App listening on port 3000')
});