const express = require('express');
const dotenv = require('dotenv');
const database = require('./config/database');
const jobsRouter = require('./jobs/jobs.router');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

database.connectDB();

app.get('/', (req, res) => {
    res.send('Jobs Apis');
});

app.use('/api/v1/jobs', jobsRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
