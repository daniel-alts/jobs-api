const express = require('express');

const router = express.Router();

const jobsController = require('./jobs.controller');


// create job
router.post('/', jobsController.createJobController);

module.exports = router;
