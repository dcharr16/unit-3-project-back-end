import {Recipe} from '../models/recipe.js'

function index (req, res) {
  Recipe.find({})
  .then (recipes =>{
    res.json(recipes)
  }) 
  .catch(err => {
    res.json(err)
  })
}
function create (req, res){
  Recipe.create (req.body)
  .then(recipe => res.json(recipe))
  .catch (err => res.json(err))
}
function update (req, res){
  Recipe.findByIdAndUpdate(req.params.id,req.body,{new: true})
  .then(recipe => res.json(recipe))
  .catch (err => res.json(err))
}
function deleteRecipe (req, res){
  Recipe.findByIdAndDelete(req.params.id)
  .then(recipe => res.json(recipe))
  .catch (err => res.json(err))
  
}
function show (req, res){
  Recipe.findById(req.params.id)
  .then(recipe => res.json(recipe))
  .catch (err => res.json(err))
  
}

export {
  index,
  create,
  update,
  deleteRecipe as delete,
  show,
}