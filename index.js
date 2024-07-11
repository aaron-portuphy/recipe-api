import express from 'express';
import mongoose from 'mongoose';
import expressOasGenerator from 'express-oas-generator';
import recipeRouter from './routes/recipes.js';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import categoryRouter from './routes/category.js';
import userRouter from './routes/user.js';



// Connect to database
await mongoose.connect(process.env.MONGO_URL);

//Create session store



// Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags:['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply middlewares
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: true,
    // cookie:{secure: true},
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })

}))

//Create upload middleare

//Define route
// app.get('/', (req,res) =>{
//     res.json('Welcome Home');
// });
// app.post('/login', (req,res) =>{
//     res.json('Login successful');
// });
// app.post('/update', (req,res) =>{
//     res.json('Profile Updated');
// });

// Use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

//Listen for incoming request
const port = process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log('App listening on port 3000')
});