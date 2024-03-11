import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.teosblog_token;
  if (!token) {
    return next(errorHandler(401, "Unauthrized!"));
  }
  jwt.verify(token, process.env.JWTSECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthrized!"));
    }
    req.user = user;
    next();
  });
};
