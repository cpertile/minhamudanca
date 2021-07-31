require('dotenv').config()
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

const port = process.env.port || 4000;
server.listen(port).then(() => {
	console.log(`=> Server listening at ${port}`);
})