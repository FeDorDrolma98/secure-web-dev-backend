import { r as redirect } from "../../../chunks/index.js";
async function load({ cookies, parent }) {
  await parent();
  cookies.delete("jwt");
  throw redirect(307, "/");
}
export {
  load
};
