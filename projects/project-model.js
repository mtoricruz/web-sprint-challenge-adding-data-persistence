const db = require("../data/db-config.js");

function findProjects() {
    return db('projects')
        .select()
}

function addProject(project) {
    return db('projects')
        .insert(project)
}

function findResources() {
    return db('resources')
        .select()
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function findTasks() {
    return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.*', 'projects.name as Project Name', 'projects.description as Project Description')
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}

module.exports = {
    findProjects,
    addProject,
    findResources,
    addResource,
    findTasks,
    addTask
}