const express = require('express');
const db = require('./data/projects');
const { loadProject, validateProjectBody } = require('./project_middleware');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const projects = await db.getAllProjects();
		res.json(projects);
	} catch (ex) {
		console.error(ex);
		res.status(500).json({ error: 'Failed to fetch project data' });
	}
});

router.post('/', validateProjectBody, async (req, res) => {
    try { 
        const newProject = await db.createProject(req.body);
        res.status(201).json(newProject);
    } catch (ex) {
		console.error(ex);
		res.status(500).json({ error: 'Failed to create project' });
	}
})

router.get('/:project_id', loadProject, (req, res) => {
    res.json(req.project);
})

router.put('/:project_id', loadProject, validateProjectBody, async (req, res) => {
    try { 
        const newProject = await db.updateProject(req.project.id, req.body);
        res.json(newProject);
    } catch (ex) {
		console.error(ex);
		res.status(500).json({ error: 'Failed to update project' });
	}
})

router.delete('/:project_id', loadProject, async (req, res) => {
    try { 
        await db.deleteProject(req.project.id);
        res.end();
    } catch (ex) {
		console.error(ex);
		res.status(500).json({ error: 'Failed to delete project' });
	}
})

module.exports = router;
