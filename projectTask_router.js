const express = require('express');
const db = require('./data/tasks');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const tasks = await db.getTasks(req.project.id);
		res.json(tasks);
	} catch (ex) {
		console.error(ex);
		res.status(500).json({
			error: 'Failed to fetch tasks.'
		});
	}
});

router.post('/', async (req, res) => {
	try {
		const task = { ...req.body, project_id: req.project.id };
		const newTask = await db.createTask(task);
		res.status(201).json(newTask);
	} catch (ex) {
		console.error(ex);
		res.status(500).json({
			error: 'Failed to create tasks.'
		});
	}
});

module.exports = router;
