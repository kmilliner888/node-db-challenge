const db = require('./db-config');

function find() {
    return db('projects');
};

function findProjectName() {
    return db('projects.name');
};

function findProject(id) {
    return db('projects').where({id}).first();
};

function addProject(project) {
    return db('projects').insert(project);
}

function findAllTasks() {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('tasks.id', 'tasks.project_id', 'projects.name', 'tasks.description')
};


function addTask(task) {
    return db('tasks').insert(task);
};

function findAllResources() {
    return db('resources')
        .join('projects', 'projects.id', '=', 'resources.project_id')
        .select('resources.id', 'resources.name', 'resources.description')
};

function addResource(resource) {
    return db('resources').insert(resource);
};

function projectTasks() {
    let p = findProjectName
    let t = findAllTasks
    return {p, t}
}

module.exports = {
    find,
    findProject,
    addProject,
    findAllTasks,
    addTask,
    findAllResources,
    addResource,
    projectTasks,
    findProjectName
}


