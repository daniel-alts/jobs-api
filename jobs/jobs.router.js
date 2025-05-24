const express = require('express');

const router = express.Router();

const jobsController = require('./jobs.controller');
const jobsMiddleware = require('./jobs.middleware');

// create job
router.post('/', jobsMiddleware.CreateJobValidator, jobsController.createJobController);
router.get('/', jobsController.getJobsController);

module.exports = router;
