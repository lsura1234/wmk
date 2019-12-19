import sha1 from "sha1";
import { get } from "lodash";
import adminRepository from "../../cores/resources/admin/admin.repository";

const add = async (ctx, body) => {
  const password = get(body, "password", null);
  const userName = get(body, "userName", null);
  if (!password || !userName) {
    ctx.status = 400;
    return {
      error: {
        message: "error 400 Bad request"
      }
    };
  }
  await adminRepository.create({ userName, password: sha1(password) });
  return { data: "success" };
};

export default add;
