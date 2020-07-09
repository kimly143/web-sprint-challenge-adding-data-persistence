const db = require('./db');

const getTasks = (project_id) => {
    if (project_id) {
        return db('tasks')
            .where('project_id', project_id)
            .innerJoin('projects', 'projects.id', 'tasks.project_id')
            .select('tasks.*', 'projects.name as project_name', 'projects.description as project_description')
    }

    return db('tasks')
        .innerJoin('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.*', 'projects.name as project_name', 'projects.description as project_description')
}

const getTask = (id) => {
    return db('tasks')
        .where('id', id)
        .first();
}

const createTask = (task) => {
    return db('tasks')
        .insert(task)
        .then(([ id ]) => getTask(id));
}

module.exports = {
    getTasks,
    createTask,
    getTask,
}