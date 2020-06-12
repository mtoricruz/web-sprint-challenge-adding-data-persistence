const express = require('express');
const DB = require('./project-model');
const router = express.Router({
    mergeParams: true,
  });

router.get('/', (req, res) => {
    DB.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

router.post('/', (req, res) => {
    const projectData = req.body;

    DB.addProject(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new project' });
    })
})

router.get('/resources', (req, res) => {
    DB.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    DB.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new resource' });
    })
})

router.get('/tasks', (req, res) => {

    DB.findTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get tasks' });
    })
})

router.post('/add-task', (req, res) => {
    const taskData = req.body;

    DB.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new task' });
    })
})

module.exports = router;