import { r as redirect, f as fail } from "../../../chunks/index.js";
import { p as post } from "../../../chunks/api.js";
async function load({ parent, url }) {
  const { user } = await parent();
  if (user)
    return redirect(307, "/");
  const para = url.searchParams.get("error");
  return { para };
}
const actions = {
  // @ts-ignore
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const user = {
      username: data.get("username"),
      password: data.get("password")
    };
    const { jwt } = await post("users/login", user);
    user.username;
    if (jwt.errors) {
      return fail(401, jwt);
    }
    cookies.set("jwt", jwt, { path: "/" });
    locals.jwt = jwt;
    return jwt;
  }
};
export {
  actions,
  load
};
