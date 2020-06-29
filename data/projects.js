const db = require('./db');

const projects = db('projects');
const getAllProjects = () => {
	return projects;
};

const createProject = (project) => {
	return projects.insert(project).then(([ id ]) => getProject(id));
};

const getProject = (id) => {
	return projects.where('id', id);
};

const updateProject = (id, project) => {
	return projects.where('id', id).update(project).then(() => getProject(id));
};

const deleteProject = (id) => {
	return projects.where('id', id).delete();
};

module.exports = { getAllProjects, getProject, createProject, updateProject, deleteProject };
