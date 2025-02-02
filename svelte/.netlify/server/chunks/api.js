import { r as redirect, e as error } from "./index.js";
//const base = "https://webapploc.onrender.com/";
const base = "http://localhost:3000";
async function send({ method, path, data, token }) {
  const opts = { method, headers: {} };
  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }
  if (token) {
    opts.headers["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${base}/${path}`, opts);
  if (res.status == 200 || res.status === 201) {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  }
  if (res.status === 401) {
    if (method === "POST") {
      throw redirect(302, `/login?error=true`);
    }
    throw redirect(302, `/login`);
  }
  if (res.status === 403) {
    throw redirect(302, `/login`);
  }
  if (res.status === 400) {
    throw redirect(302, `/login`);
  }
  throw error(res.status);
}
function get(path, token) {
  return send({ method: "GET", path, token });
}
function post(path, data, token) {
  return send({ method: "POST", path, data, token });
}
function patch(path, data, token) {
  return send({ method: "PATCH", path, data, token });
}
export {
  patch as a,
  get as g,
  post as p
};
