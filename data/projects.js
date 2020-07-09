const db = require('./db');

const getAllProjects = () => {
	return db('projects');
};

const createProject = (project) => {
	return db('projects').insert(project).then(([ id ]) => getProject(id));
};

const getProject = (id) => {
	return db('projects').where('id', id).first();
};

const updateProject = (id, project) => {
	return db('projects').where('id', id).update(project).then(() => getProject(id));
};

const deleteProject = (id) => {
	return db('projects').where('id', id).delete();
};

module.exports = { getAllProjects, getProject, createProject, updateProject, deleteProject };
