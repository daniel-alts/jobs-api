const Job = require('./jobs.model');

const CreateJob = async({
    title,
    description,
    location,
    salary,
    company,
    mode,
    experience,
    expiredAt,
}) => {

    const createJob = await Job.create({
        title,
        description,
        location,
        salary,
        company,
        mode,
        experience,
        expiredAt,
    })


    return createJob;

}

module.exports = {
    CreateJob
};