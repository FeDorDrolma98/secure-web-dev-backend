import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ndn2pf_START -->${$$result.title = `<title>Login</title>`, ""}<meta name="${"description"}" content="${"Login"}"><!-- HEAD_svelte-1ndn2pf_END -->`, ""}

<body class="${"login"}">${data.para ? `<p class="${"error-message"}">Incorrect Password</p>` : ``}

	<div class="${"text-column"}"><h1>Login</h1>
		<h2>If you don&#39;t have an account, go <a href="${"/register"}">register</a> first !</h2>
		
		
		<form method="${"POST"}" action="${"/login"}"><label>Username
				<input name="${"username"}" type="${"text"}" required></label>
			<label>Password
				<input name="${"password"}" type="${"password"}" required></label>
			<div class="${"action"}"><button type="${"submit"}">Log in</button>
				<button>Register</button></div></form></div></body>`;
});
export {
  Page as default
};
