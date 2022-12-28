const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const MONGODB = "mongodb+srv://cooper:codes@cluster0.amqvuqc.mongodb.net/?retryWrites=true&w=majority"

//Apollo server 
//typeDefs: GraphQL Types Definitions
// resolvers: How do we resolve / Mutations
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() =>{
    console.log("MongoDB connection established");
    return server.listen({port:5000});
})
.then((res)=> {
    console.log(`server running at  ${res.url}`);
})