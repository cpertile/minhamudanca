require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const { userSchema, placeSchema, agencySchema } = require('./schemas')
const { userResolver, placeResolver, agencyResolver } = require('./resolvers')

const server = new ApolloServer({
	typeDefs: mergeTypeDefs([userSchema, placeSchema, agencySchema]),
	resolvers: [userResolver, placeResolver, agencyResolver]
})

const port = process.env.port || 4000;
server.listen(port).then(() => {
	console.log(`=> Server listening at ${port}`);
})