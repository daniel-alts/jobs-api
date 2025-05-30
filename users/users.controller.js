const UserService = require('./users.service');



const CreateUser = async (req, res) => {
    const payload = req.body;

    const serviceResponse = await UserService.CreateUser(payload);

    res.status(serviceResponse.status).json(serviceResponse);
}


const LoginUser = async (req, res) => {
    const serviceResponse = await UserService.LoginUser(req.body);
    res.status(serviceResponse.status).json(serviceResponse);
}

module.exports = {
    CreateUser,
    LoginUser
}