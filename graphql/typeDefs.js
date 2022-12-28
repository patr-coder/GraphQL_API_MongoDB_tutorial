const {gql} = require("apollo-server")
module.exports = gql `
type Query{
    # recipe:[Recipe!]!
    recipe(id: ID!): Recipe!
    getRecipes(amount: Int):[Recipe]
}
type Recipe {
    name : String
    description : String
    createAt: String
    thumbsUp: Int
    thumbsDown : Int
}
input RecipeInput{
    name : String
    description: String
}
input EditRecipeInput{
    name : String
    description : String
}
type Mutation{
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(id: ID!):Boolean
    editRecipe(id:ID, editRecipeInput: EditRecipeInput ):Boolean

}
`