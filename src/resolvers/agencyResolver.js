const agencies = [
	{ id: 1, name: '', url: '' },
	{ id: 2, name: '', url: '' },
	{ id: 3, name: '', url: '' },
]

const Query = {
	agencies: () => agencies
}

const Mutation = {
	addAgency: () => { }
}

module.exports = { Query, Mutation }