const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/schema.gql');
const resolvers = require('./resolvers');

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`=> Server ready at ${url}`);
})