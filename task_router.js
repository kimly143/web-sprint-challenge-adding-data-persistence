const express = require('express');
const db = require('./data/tasks');
const { validateTaskBody } = require('./task_middleware');

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

router.post('/', validateTaskBody, async (req, res) => {
    try {
        const newTask = await db.createTask(req.bpdy);
        res.status(201).json(newTask);
    } catch (ex) {
        console.error(ex);
        res.status(500).json({
            error: "Failed to create tasks."
        })
    }
})

module.exports = router;