const Recipe = require('../models/Recipe')

module.exports = {
   Query: {
   
     async recipe(_, {id}){
        return await Recipe.findById(id)
     },
     async getRecipes(_, {amount}){
        return await Recipe.find().sort({createAt:-1}).limit(amount)
     }
   },
   Mutation:{
      async createRecipe(_, {recipeInput: {name, description}}){
         const createRecipe = new Recipe({
            name: name,
            description: description,
            createAt: new Date().toISOString(),
            thumbsUp: 0,
            thumbsDown:0,
         })

         const res = await createRecipe.save(); // MongoDB saving
         console.log(res._doc);

         return {
            id: res.id,
            ...res._doc 
         }
         
      },
      async deleteRecipe(_, {id:ID}){
         const wasDeleted =  (await Recipe.deleteOne({_id: ID})).deletedCount;
         return wasDeleted; // 1 if something was deleted, 0 if nothing was deleted
      },
      async editRecipe(_,{id:ID, editRecipeInput:{name, description}}){
         const wasEdited = (await Recipe.updateOne({_id: ID},{name:name,description:description})).modifiedCount;

         return wasEdited; // 1 if something was edited, 0 if nothing was edited
      }
   }

}