import express from 'express';
import recipeRouter from './routes/recipes.js';

// Create Express App
const app = express();

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

//Listen for incoming request

app.listen(3000, ()=>{
    console.log('App listening on port 3000')
});