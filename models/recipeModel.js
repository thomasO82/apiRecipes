const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "La recette est obligatoire"]
    },
    ingredients: {
        type: [],
        required: [true, "les ingredients sont requis"]
    },
    preparationSteps: {
        type: String,
        required: [true, "les etapes sont requis"]
    },
    author: {
        type: String,
        default: 'Anonyme'
    }
})

const recipeModel = mongoose.model("recipes", recipeSchema)
module.exports = recipeModel