import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-i4oixz.svelte-i4oixz{display:flex;justify-content:space-between}.corner.svelte-i4oixz.svelte-i4oixz{width:3em;height:3em}nav.svelte-i4oixz.svelte-i4oixz{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}ul.svelte-i4oixz.svelte-i4oixz{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain;border-radius:10px}li.svelte-i4oixz.svelte-i4oixz{position:relative;height:100%}li[aria-current='page'].svelte-i4oixz.svelte-i4oixz::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-i4oixz a.svelte-i4oixz{display:flex;height:100%;align-items:center;padding:0 4rem;color:var(--color-text);font-weight:700;font-size:1rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-i4oixz.svelte-i4oixz:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-i4oixz"}"><div class="${"corner svelte-i4oixz"}"></div>

	<nav class="${"svelte-i4oixz"}"><ul class="${"svelte-i4oixz"}"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="${"svelte-i4oixz"}"><a href="${"/"}" class="${"svelte-i4oixz"}">Home</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/locations" ? "page" : void 0, 0)} class="${"svelte-i4oixz"}"><a href="${"/locations"}" class="${"svelte-i4oixz"}">Locations</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/register" ? "page" : void 0, 0)} class="${"svelte-i4oixz"}"><a href="${"/register"}" class="${"svelte-i4oixz"}">Register</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/logout" ? "page" : void 0, 0)} class="${"svelte-i4oixz"}"><a href="${"/logout"}" class="${"svelte-i4oixz"}">Log out</a></li></ul></nav>

	<div class="${"corner svelte-i4oixz"}"></div>
</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-8o1gnw a.svelte-8o1gnw{font-weight:bold}@media(min-width: 480px){footer.svelte-8o1gnw.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-8o1gnw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-8o1gnw"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-8o1gnw"}"><p>Fait par <a href="${"https://github.com/FeDorDrolma98"}" class="${"svelte-8o1gnw"}">Felicity</a> et <a href="${"https://github.com/sveltejs/realworld"}" class="${"svelte-8o1gnw"}">SvelteKit</a> en <a href="${"https://github.com/RochMoreau/secure-web-dev-workshop1"}" class="${"svelte-8o1gnw"}">Web application</a></p></footer>
</div>`;
});
export {
  Layout as default
};
