const db = require('./data/projects');

const loadProject = async (req, res, next) => {
	try {
		const project = await db.getProject(req.params.project_id);
		if (!project) {
			return res.status(404).json({ error: 'Project not found' });
		}
        req.project = project;
        return next();
	} catch (ex) {
		console.error(ex);
		res.status(500).json({
			error: 'Failed to fetch project'
		});
	}
};

const validateProjectBody = (req, res, next) => {
    if (!req.body.name) {
        return res.status(422).json({
            error: "Name is required for projects"
        })
    }
    next();
}

module.exports = {
    loadProject,
    validateProjectBody
}