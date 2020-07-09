const db = require('./db');

const getAllResources = () => {
	return db('resources');
};

const createResource = (resource) => {
	return db('resources').insert(resource).then(([ id ]) => getResource(id));
};

const getResource = (id) => {
	return db('resources').where('id', id).first();
};

// const updateResource = (id, resource) => {
// 	return db('resources').where('id', id).update(resource).then(() => getResource(id));
// };

// const deleteResource = (id) => {
// 	return db('resources').where('id', id).delete();
// };

module.exports = {
	getAllResources,
	getResource,
	createResource,
	// updateResource,
	// deleteResource
};
