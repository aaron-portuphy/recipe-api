import { Router } from "express";
import { deleteRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


// Create a router
const recipeRouter = Router();

//Apply middlewares
recipeRouter.use(checkUserSession);

// Define routes

    recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',checkUserSession , localUpload.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id',checkUserSession, patchRecipe);
recipeRouter.delete('/recipes/:id', deleteRecipe);






//Export recipeRouter
export default recipeRouter;


//EelVXqYUNyOfOb5k