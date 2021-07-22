const { ApolloServer } = require('apollo-server');
const userSchema = require('./schemas/user.gql');
const userResolvers = require('./resolvers/userResolver');

const server = new ApolloServer({
	typeDefs: [userSchema],
	resolvers: [userResolvers]
});

server.listen().then(({ url }) => {
	console.log(`=> Server ready at ${url}`);
})