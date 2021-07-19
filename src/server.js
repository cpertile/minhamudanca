const { ApolloServer } = require('apollo-server');
const userSchema = require('./schemas/user.gql');
const resolvers = require('./resolvers');

const server = new ApolloServer({
	typeDefs: [userSchema],
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`=> Server ready at ${url}`);
})