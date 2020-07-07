const express = require('express');
const db = require('./data/resources');
const { validateResourceBody } = require('./resource_middleware');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const resources = await db.getAllResources();
		res.json(resources);
	} catch (ex) {
		console.error(ex);
		res.status(500).json({ error: 'Failed to fetch project data' });
	}
});

router.post('/', validateResourceBody, async (req, res) => {
	try {
		const newResource = await db.createResource(req.body);
		res.status(201).json(newResource);
	} catch (ex) {
		console.error(ex);
		res.status(500).json({ error: 'Failed to create resource' });
	}
});
module.exports = router;
