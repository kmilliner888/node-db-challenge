const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const projectRouter = require('./data/routers/projectRouter');
const taskRouter = require('./data/routers/taskRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;

