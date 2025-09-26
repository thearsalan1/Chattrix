import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d in milliseconds
    httpOnly: true, // prevent XSS attacks: cross-site scripting
    sameSite: "strict", // CRSF attacks
    secure: ENV.NODE_ENV === "development" ? false : true,
  });

  return token;
};
