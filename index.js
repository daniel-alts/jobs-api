const app = require('./main')
const database = require('./config/database');
const dotenv = require('dotenv');


dotenv.config();

database.connectDB();


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



