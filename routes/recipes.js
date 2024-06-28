import { Router } from "express";
import { deleteRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";


// Create a router
const recipeRouter = Router();

// Define routes

    recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);
recipeRouter.delete('/recipes/:id', deleteRecipe);






//Export recipeRouter
export default recipeRouter;


//EelVXqYUNyOfOb5k