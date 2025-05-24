const Job = require('./jobs.model');

const CreateJob = async({
    title,
    description,
    location,
    salary,
    company,
    mode,
    experience,
    expiryDate,
    role, 
    industry,
}) => {

    const createJob = await Job.create({
        title,
        description,
        location,
        salary,
        company,
        mode,
        experience,
        expiryDate,
        role, 
        industry,
        status: 'pending'
    })


    return createJob;

}

const GetAllJobs = async({ location, status, mode }) => {
    const query = {}

    if (location) {
        query.location = location;
    }

    if (status) {
        query.status = status;
    }

    if (mode) {
        query.mode = mode;
    }

    const jobs = await Job.find(query); // select * from jobs where location = location and status = status and mode = mode

    return jobs;
}

module.exports = {
    CreateJob,
    GetAllJobs
};