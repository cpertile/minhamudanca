const places = [
	{ id: 1, url: '', rent: 0, condo: 0, notes: '' },
	{ id: 2, url: '', rent: 0, condo: 0, notes: '' },
	{ id: 3, url: '', rent: 0, condo: 0, notes: '' },
]

const Query = {
	places: () => places
}

const Mutation = {
	addPlace: () => { }
}

module.exports = { Query, Mutation }