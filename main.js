const express = require('express');
const jobsRouter = require('./jobs/jobs.router');
const usersRouter = require('./users/users.router');

const app = express();

app.use(express.json()); // parse json body

app.get('/', (req, res) => {
    res.send('Jobs Apis');
});

app.get('/health', (req, res) => {
    res.send('OK');
});

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/jobs', jobsRouter);


module.exports = app;
