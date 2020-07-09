const projectDb = require('./data/projects');

const validateTaskBody = async (req, res, next) => {
	if (!req.body.description) {
		return res.status(422).json({
			error: 'Description is required for task'
		});
	}
	if (!req.body.project_id) {
		return res.status(422).json({
			error: 'Project is required for task'
		});
	} else {
		try {
			const project = await projectDb.getProject(req.body.project_id);
			if (!project) {
				return res.status(404).json({ error: 'Project not found' });
			}
			req.project = project;
			return next();
		} catch (ex) {
			console.error(ex);
			res.status(500).json({
				error: 'Failed to validate task body'
			});
		}
	}

	next();
};

module.exports = { validateTaskBody };
