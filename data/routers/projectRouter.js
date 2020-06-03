const express = require('express');

const Projects = require('../project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Could not get those projects for you, sorry' });
  });
});

router.get('/resources', (req, res) => {
  
    Projects.findAllResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Something went wrong getting those resources' });
    });
}); 

router.post('/', (req, res) => {
  const newProject = req.body;

  Projects.addProject(newProject)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed add that new project' });
  });
});

router.post('/:id/tasks', (req, res) => {
  const newTask = req.body;
  const { id } = req.params; 

  Projects.findProject(id)
  .then(project => {
    if (project) {
      Projects.addTask(newTask, id)
      .then(task => {
        res.status(201).json(task);
      })
    } else {
      res.status(404).json({ message: 'Did not find that project id' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'sorry could not add this task' });
  });
});

router.post('/:id/resources', (req, res) => {
    const newResource = req.body;
    const { id } = req.params; 
  
    Projects.findProject(id)
    .then(project => {
      if (project) {
        Projects.addResource(newResource, id)
        .then(resource => {
          res.status(201).json(resource);
        })
      } else {
        res.status(404).json({ message: 'did not find project with that id' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'sorry could not add that resource' });
    });
  });

module.exports = router;