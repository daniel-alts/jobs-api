const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        enum: ['onsite', 'remote'],
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'pending'],
        required: true,
        default: 'pending'
    },
    industry: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
