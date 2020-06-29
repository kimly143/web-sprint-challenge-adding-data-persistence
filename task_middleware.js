const validateTaskBody = (req, res, next) =>{
    if (!req.body.description) {
        return res.status(422).json({
            error: 'Description is required for task',
        });
    }

    next();
}

module.exports = { validateTaskBody };