const db = require('./data/resources');

const loadResource = async (req, res, next) => {
	try {
		const resource = await db.getProject(req.params.resource_id);
		if (!resource) {
			return res.status(404).json({ error: 'Resource not found' });
		}
        req.resource = resource;
        return next();
	} catch (ex) {
		console.error(ex);
		res.status(500).json({
			error: 'Failed to fetch resource'
		});
	}
};

const validateResourceBody = (req, res, next) => {
    if (!req.body.name) {
        return res.status(422).json({
            error: "Name is required for resources"
        })
    }
    next();
}

module.exports = {
    loadResource,
    validateResourceBody
}