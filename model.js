const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Iteration 1
const recipesSchema = new Schema({
    title: {type: String, required: true, unique: true},
    level: {type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
    indgrediens: {type: Array},
    cuisine: {type: String, required: true},
    dishType: {type: String, enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]},
    image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
    duration: {type: Number, min: 0},
    creator: {type: String},
    created: {type: Date, default: Date.now}
  })

const Recipe = mongoose.model('Recipe', recipesSchema);
module.exports = Recipe;