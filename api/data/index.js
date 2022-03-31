const { ApolloServer, gql } = require('apollo-server')

const users = [
    {
        name: "John",
        active: true
    },
    {
        name: "Billy",
        active: false
    }
]

const typeDefs = gql `
    type User {
        name: String!
        active: Boolean!
        email: String
    }
`

const server = new ApolloServer({ typeDefs, resolvers })