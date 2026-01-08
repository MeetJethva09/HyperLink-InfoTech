const jwt = require("jsonwebtoken")


const generateToken = (user) =>{
    const accessPayload = {
        id : user._id,
    }
    const accessToken = jwt.sign(accessPayload , process.env.ACCESS_TOKEN_SECRET);
    return accessToken;
}


const generateRefreshToken = (user) =>{
    const refreshPayload = {
        id : user._id,
    }
    const refreshToken = jwt.sign(refreshPayload , process.env.REFRESH_TOKEN_SECRET);
    return refreshToken;
}
module.exports = {
    generateToken,
    generateRefreshToken
}

