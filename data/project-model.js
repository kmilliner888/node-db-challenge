const db = require('./db-config');

function find() {
    return db('projects');
};

function findProject(id) {
    return db('projects').where({id}).first();
};

function addProject(project) {
    return db('projects').insert(project);
}

// function findTasks(id) {
//     return db('tasks')
//         .join('projects')
//         .select('projects.name', 'tasks.description', 'tasks.notes')
//         .join('project_tasks')
//         .where({project_id, task_id: id});
// };

function findAllTasks(id) {
    return db('tasks')
        .join('projects', 'project_tasks')
        .select('tasks.id', 'tasks.project_id', 'projects.name')
        .where({project_id,task_id: id});
};

function addTask(task) {
    return db('tasks').insert(task);
};

// function findResources(id) {
//     return db('resources')
//         .join('projects')
//         .select('resources.id', 'resources.project_id', 'resources.name', 'resources.description')
//         .where({project_id: id});
// };

function findAllResources() {
    return db('resources')
        .join('projects')
        .select('resources.id', 'resources.project_id', 'resources.name', 'resources.description')
};

function addResource(resource) {
    return db('resources').insert(resource);
};

module.exports = {
    find,
    findProject,
    addProject,
    findAllTasks,
    addTask,
    findAllResources,
    addResource
}


