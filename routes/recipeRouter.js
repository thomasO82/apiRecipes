const recipeRouter = require("express").Router()
const recipeController = require('../controllers/recipeController')

recipeRouter.get('/recipes', recipeController.getRecipes)
recipeRouter.post('/recipes', recipeController.postRecipe)
recipeRouter.get('/recipes/:id', recipeController.getRecipe)
recipeRouter.put('/recipes/:id', recipeController.updateRecipe)
recipeRouter.delete('/recipes/:id', recipeController.deleteRecipe)



module.exports = recipeRouter