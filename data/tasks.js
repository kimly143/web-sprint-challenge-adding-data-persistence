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

module.exports = {
    getTasks,
}