const express = require('express');
const dotenv = require('dotenv');
const database = require('./config/database');
const jobsRouter = require('./jobs/jobs.router');
const usersRouter = require('./users/users.router');
const { AuthorizeUser } = require('./users/users.middleware');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

database.connectDB();

app.use(express.json()); // parse json body

app.get('/', (req, res) => {
    res.send('Jobs Apis');
});

app.get('/health', (req, res) => {
    res.send('OK');
});

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/jobs', jobsRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
