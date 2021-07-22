const users = [
	{ id: 1, name: 'krebs', email: 'kre@ber.son' },
	{ id: 2, name: 'krebinho', email: 'kre@bi.nho' },
]

module.exports = {
	Query: {
		users: () => users,
		user: () => { }
	},

	Mutation: {
		addUser: () => { }
	}
}