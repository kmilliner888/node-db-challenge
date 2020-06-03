const express = require('express');

const Tasks = require('../project-model.js');

const router = express.Router();

  
router.get('/', (req, res) => {
    
    Tasks.findAllTasks()
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        res.status(500).json({ message: 'Something went wrong getting those tasks' });
    });
});

module.exports = router;