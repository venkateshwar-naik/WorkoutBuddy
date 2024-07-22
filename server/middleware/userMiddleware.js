const jwt = require("jsonwebtoken");

const User = require("../modals/userModel");

const authUser = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization)
  if (!authorization) {
    return res.status(401).json({ error: "auth token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token,"mysecret", process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    res.status(401).json({ error: "request is not authorized" });
  }
};

module.exports = authUser;
