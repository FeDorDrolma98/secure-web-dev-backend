import { c as create_ssr_component } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-1pxeemu{background-color:#F6F6F6}form.svelte-1pxeemu{width:50%;margin:0 auto;padding:20px;background-color:#fff;border-radius:10px}label.svelte-1pxeemu{display:block;margin-bottom:10px}input[type="text"].svelte-1pxeemu{width:100%;padding:10px;margin-bottom:20px;border:4px solid #ccc;border-radius:5px}button[type="submit"].svelte-1pxeemu{width:100%;padding:10px;background-color:#3f51b5;color:#fff;border:none;border-radius:5px;cursor:pointer}button[type="submit"].svelte-1pxeemu:hover{background-color:grey}h1.svelte-1pxeemu{text-align:center;font-size:40px;margin-top:10px;color:black}.return-main.svelte-1pxeemu{position:absolute;top:40px;right:10px;margin:0;padding:10px 20px;background-color:lightgray;border:none;border-radius:5px;font-size:16px;cursor:pointer}.return-main.svelte-1pxeemu:hover{color:#000000;background-color:grey}.location-added.svelte-1pxeemu{font-size:20px;color:green;text-align:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-78wvok_START -->${$$result.title = `<title>Add a Location</title>`, ""}<!-- HEAD_svelte-78wvok_END -->`, ""}

<body class="${"svelte-1pxeemu"}"><h1 class="${"svelte-1pxeemu"}">Add a Location</h1>
    ${data.para ? `<p class="${"location-added svelte-1pxeemu"}">Locations Added</p>` : ``}
    <form method="${"POST"}" class="${"svelte-1pxeemu"}"><label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Film Type : <input type="${"text"}" placeholder="${"Film Type"}" value="${"Long métrage"}" name="${"filmType"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Film Producer Name :
            <input type="${"text"}" placeholder="${"Film Producer Name"}" value="${"MANDARIN PRODUCTION"}" name="${"filmProducerName"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">End Date :
            <input type="${"text"}" placeholder="${"End Date"}" value="${"2020-08-21T00:00:00.000Z"}" name="${"endDate"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Film Name :
            <input type="${"text"}" placeholder="${"Film Name"}" value="${"Tuto bene"}" name="${"filmName"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">District : <input type="${"text"}" placeholder="${"District"}" value="${"75013"}" name="${"district"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Source Location ID :
            <input type="${"text"}" placeholder="${"Source Location ID"}" value="${"2020-404"}" name="${"sourceLocationId"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Film Director Name :
            <input type="${"text"}" placeholder="${"Film Director Name"}" value="${"Hugo Sanchez"}" name="${"filmDirectorName"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Adress :
            <input type="${"text"}" placeholder="${"Address"}" value="${"rue pascal, 75013 paris"}" name="${"address"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Start Date :
            <input type="${"text"}" placeholder="${"Start Date"}" value="${"2020-07-20T00:00:00.000Z"}" name="${"startDate"}" required class="${"svelte-1pxeemu"}"></label>
        <label class="${"svelte-1pxeemu"}"><br class="${"svelte-1pxeemu"}">Year :
            <input type="${"text"}" placeholder="${"Year"}" value="${"2020"}" name="${"year"}" required class="${"svelte-1pxeemu"}"></label><br class="${"svelte-1pxeemu"}">
        <button type="${"submit"}" class="${"svelte-1pxeemu"}">Add</button></form>

    <br class="${"svelte-1pxeemu"}">
    <button onclick="${"window.location.href='/locations'"}" class="${"return-main svelte-1pxeemu"}">Return to Main</button></body>`;
});
export {
  Page as default
};
