const express = require('express');
const db = require('./data/tasks');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await db.getTasks();
        res.json(tasks);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({
            error: "Failed to fetch tasks."
        })
    }
})

module.exports = router;