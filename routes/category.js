import { Router } from "express";
import multer from 'multer'
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

//Creaet uploads Middleware

// Create a router
const categoryRouter = Router();

//Define routes
categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', checkUserSession,localUpload.single('image'), postCategory);

//Export router 
export default categoryRouter;