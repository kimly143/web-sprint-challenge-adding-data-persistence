const express = require("express");
const projectRouter = require('./project_router');

const app = express();

app.use(express.json());

app.use('/api/projects', projectRouter);

app.listen(process.env.PORT || 4000);