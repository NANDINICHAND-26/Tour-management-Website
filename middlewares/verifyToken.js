const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
        return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
