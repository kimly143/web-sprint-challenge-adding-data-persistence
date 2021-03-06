const express = require("express");
const projectRouter = require('./project_router');
const resourceRouter = require('./resource_router');
const taskRouter = require('./task_router');

const app = express();

app.use(express.json());

app.use('/api/projects', projectRouter);

app.use('/api/resources', resourceRouter);

app.use('/api/tasks', taskRouter);

app.listen(process.env.PORT || 4000);