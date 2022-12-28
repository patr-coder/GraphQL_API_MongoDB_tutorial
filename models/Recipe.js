const {model, Schema} = require('mongoose');

const recipeSchema = new Schema({
    name : String,
    description : String,
    createAt : String,
    thumbsUp : String,
    thumbsDown : Number,   
});
module.exports = model('Recipe', recipeSchema);
