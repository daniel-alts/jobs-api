const joi = require("joi");

const CreateJobValidator = async (req, res, next) => {
    try {
            const payload = req.body;

    const schema = joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        salary: joi.string().required(),
        company: joi.string().required(),
        role: joi.string().required(),
        mode: joi.string().valid('remote', 'onsite', 'hybrid').required(),
        experience: joi.string().required(),
        industry: joi.string().required(),
        expiryDate: joi.date().required()
    })

    const { error, value } = await schema.validate(payload);

    if (!error) {
        next()
    } else {
        return res.status(400).json({
            status: "error",
            message: "Invalid payload",
            error: error.details
        })
    }

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

module.exports = {
    CreateJobValidator
}

