import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) =>{
    try {
        //Get new category to database
        const allCategories = await CategoryModel.find();
        //Return response
        res.json(allCategory)
    } catch (error) {
        
    }
}

export const postCategory = async (req, res, next) =>{
    try {
        // Add category to database
        const newCategory = await CategoryModel.create(req.body);
        //Return response
        res.status(201).json(newCategory);
    } catch (error) {
        
    }
}