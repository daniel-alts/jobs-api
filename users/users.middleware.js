const jwt = require('jsonwebtoken');
const User = require('./users.model');

const AuthorizeUser = async (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    // bearer tkaldflkjsalkjfskl

    if (!bearerToken) {
        return res.status(401).json({
            message: 'Authorization failed'
        });
    }

    const tokenArray = bearerToken.split(' ');
    // [bearer, tkaldflkjsalkjfskl]
    //    0           1

    const token = tokenArray[1];

    if (!token) {
        return res.status(401).json({
            message: 'Authorization failed'
        });
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET || 'test_secret');
        const user = await User.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authorization failed'
        });
    }
}

module.exports = {
    AuthorizeUser
};