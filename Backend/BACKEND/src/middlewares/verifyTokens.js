import jwt from "jsonwebtoken";
import config from "../config";
//   User  Token Verification
export const verifyUserToken = (tokeny) => {
  let validtoken = false;
  const decoded = jwt.verify(token, config.USER_ACCESS_TOKEN_SECRET);
  if (decoded) {
    return decoded;
  } else {
    return validtoken;
  }
};

//   Admin  Token Verification
export const verifyAdminToken = (token) => {
  let validtoken = false;
  const decoded = jwt.verify(token, config.ADMIN_ACCESS_TOKEN_SECRET);
  if (decoded) {
    return decoded;
  } else {
    return validtoken;
  }
};
