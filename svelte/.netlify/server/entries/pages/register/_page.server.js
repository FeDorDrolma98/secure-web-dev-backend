import { f as fail, r as redirect } from "../../../chunks/index.js";
import { p as post } from "../../../chunks/api.js";
async function load({ parent, url }) {
  await parent();
  const para = url.searchParams.get("valid");
  return { para };
}
const actions = {
  // @ts-ignore
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const user = {
      username: data.get("username"),
      password: data.get("password")
    };
    const body = await post("users/register", user);
    if (body.errors)
      return fail(401, body);
    const value = btoa(JSON.stringify(body.user));
    cookies.set("jwt", value, { path: "/" });
    throw redirect(307, "/register?valid=true");
  }
};
export {
  actions,
  load
};
