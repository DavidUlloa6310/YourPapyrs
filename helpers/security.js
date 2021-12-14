const jwt = require("jsonwebtoken");

exports.checkAdminPermission = async (req, res, next) => {
  jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({
        message: "fail",
        error: err,
      });
    }

    if (decoded.role === "admin") {
      next();
    } else {
      return res.status(403).json({
        message: "fail",
        error: err,
      });
    }
  });
};
