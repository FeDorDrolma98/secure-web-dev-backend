import { c as create_ssr_component } from "../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-x3krtu_START -->${$$result.title = `<title>Register</title>`, ""}<!-- HEAD_svelte-x3krtu_END -->`, ""}

<body>
    <h1>Register</h1>
<form method="${"POST"}"><div class="${"content"}"><div class="${"input-field"}"><input name="${"username"}" type="${"text"}" required placeholder="${"Username"}"></div>
        <div class="${"input-field"}"><input name="${"password"}" type="${"password"}" required placeholder="${"Password"}"></div>
        ${data.para === "true" ? `<p>User created</p>` : ``}</div>
    <div class="${"action"}"><button type="${"submit"}">Register</button>
        <button>Login</button></div></form></body>`;
});
export {
  Page as default
};
