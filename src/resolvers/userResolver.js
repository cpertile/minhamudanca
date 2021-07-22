const users = [
	{ id: 1, name: 'krebs', email: 'kre@ber.son' },
	{ id: 2, name: 'krebinho', email: 'kre@bi.nho' },
]

const Query = {
	users: () => users,
	user: () => { }
}

const Mutation = {
	addUser: () => { }
}

module.exports = { Query, Mutation };