const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const userSchema = require('./schemas/userSchema.gql')
const placeSchema = require('./schemas/placeSchema.gql')
const agencySchema = require('./schemas/agencySchema.gql')
const userResolvers = require('./resolvers/userResolver')
const placeResolvers = require('./resolvers/placeResolver')
const agencyResolvers = require('./resolvers/agencyResolver')

const server = new ApolloServer({
	typeDefs: mergeTypeDefs([userSchema, placeSchema, agencySchema]),
	resolvers: [userResolvers, placeResolvers, agencyResolvers]
})

server.listen().then(({ url }) => {
	console.log(`=> Server ready at ${url}`);
})