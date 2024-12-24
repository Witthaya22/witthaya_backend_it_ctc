import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export default <RequestHandler>((req, res) => {
  delete req.session.auth;
  delete req.session.admin;
  res.clearCookie("token"); // Clear the JWT token cookie
  res.send({
    message: "ออกจากระบบสําเร็จ"
  });
});
