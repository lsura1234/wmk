import { get } from "lodash";
import sha1 from "sha1";
import jwt from "jwt-simple";
import adminRepository from "../../cores/resources/admin/admin.repository";

export default async (ctx, body) => {
  const userName = get(body, "userName", null);
  const password = get(body, "password", null);

  if (!userName || !password) {
    ctx.status = 400;
    return {
      error: {
        message: "error 400 Bad request"
      }
    };
  }

  const adminResponse = await adminRepository.findOne({
    userName,
    password: sha1(password)
  });

  if (adminResponse) {
    const payload = {
      userName,
      iat: new Date().getTime() //มาจากคำว่า issued at time (สร้างเมื่อ)
    };
    const token = jwt.encode(payload, process.env.USER_SECRET);

    return {
      data: {
        token,
        userName
      }
    };
  } else {
    ctx.status = 401;
    return {
      error: {
        message: "error 401 Unauthorized"
      }
    };
  }
};
