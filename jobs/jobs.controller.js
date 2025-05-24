const JobService = require('./jobs.service')


const createJobController = async (req, res) => {
    try {
    const payload = req.body


    const response = await JobService.CreateJob({
        title: payload.title,
        description: payload.description,
        location: payload.location,
        salary: payload.salary,
        company: payload.company,
        mode: payload.mode,
        experience: payload.experience,
        expiryDate: payload.expiryDate,
        role: payload.role,
        industry: payload.industry,
    })

    if (response) {
        return res.status(201).json({
            message: 'Job created successfully',
            data: response
        })
    }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}

const getJobsController = async (req, res) => {
    try {
        const { location, status, mode } = req.query;

        const response = await JobService.GetAllJobs({
            location,
            status,
            mode
        })

        return res.status(200).json({
            message: 'Jobs retrieved successfully',
            data: response
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        })
    }
}

module.exports = {
    createJobController,
    getJobsController
}