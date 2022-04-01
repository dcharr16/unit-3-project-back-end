import mongoose from "mongoose";

const Schema= mongoose.Schema

const recipeSchema = new Schema({
  name:{type: String, required: true},
  ingredients: {type: String},
  classification: {type: String, default: "vegetable"},
  rating: {type: Number, default: 5},
  owner:{type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  photo: {type: String},
}, {
  timestamps: true
})

const Recipe = mongoose.model("Recipe", recipeSchema)

export {
  Recipe
}