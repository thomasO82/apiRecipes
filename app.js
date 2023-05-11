const express = require("express")
const mongoose = require("mongoose")
const recipeRouter = require('./routes/recipeRouter')
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(recipeRouter)

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`connecté au port ${process.env.PORT}`);
    }
})

try {
    mongoose.connect(process.env.BDD_URI)
    console.log("Connecté a la base de donné");
} catch (error) {
    console.log(error);
}