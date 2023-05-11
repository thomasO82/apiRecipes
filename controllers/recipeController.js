const recipeModel = require('../models/recipeModel')

exports.getRecipes = async (req, res) => {
    try {
        if (req.query.filter) {
            let recipes = await recipeModel.find({ingredients: {$regex: req.query.filter}})
            res.json(recipes)
        }else{
            let recipes = await recipeModel.find()
            res.json(recipes)
        }
       
    } catch (error) {
        res.json(error)
    }
}

exports.postRecipe = async (req, res) => {
    try {
        let recipe = new recipeModel(req.body)
        let error = recipe.validateSync()
        if (error) {
            throw error
        }
        recipe.save()
        res.json(recipe)
    } catch (error) {
        res.json(error)
    }
}

exports.getRecipe = async (req, res) => {
    try {
        let recipe = await recipeModel.findById(req.params.id)
        if (!recipe) {
            res.status(404)
            throw { 'error': "aucune recette trouvé" }
        }
        res.json(recipe)
    } catch (error) {
        res.json(error)
    }
}

exports.updateRecipe = async (req, res)=>{
    try {
        let recipeUpdated = await recipeModel.updateOne({_id: req.params.id},req.body)
        res.json(recipeUpdated)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteRecipe = async (req, res)=>{
    try {
        let recipeDeleted = await recipeModel.deleteOne({_id: req.params.id})
        res.json(recipeDeleted)
    } catch (error) {
        res.json(error)
    }
}






