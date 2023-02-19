import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/index2.js";
import "devalue";
import "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let locations = data.body;
  let role = JSON.parse(atob(data.jwt.split(".")[1])).role;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-18rvf1p_START -->${$$result.title = `<title>Locations</title>`, ""}<!-- HEAD_svelte-18rvf1p_END -->`, ""}

<body><h1>Locations in Paris</h1>
    <h2>Click on a movie to get its details.</h2>

    ${role == "admin" ? `<a href="${"/add"}" class="${"button2"}">Add a Location</a>` : ``}

    ${locations.length === 0 ? `<p>Loading...</p>` : `<ul class="${"gradient-list"}">${each(locations, (location) => {
    return `<li class="${"element"}">
                    <p class="${"element-title-front"}">${escape(location.filmName)} - ID : ${escape(location._id)}</p>
                    ${location.showDetails ? `${role == "admin" ? `<form method="${"POST"}"><label>_id : <input type="${"text"}" placeholder="${"_id"}"${add_attribute("value", location._id, 0)} name="${"_id"}" readonly></label>
                                <label><br>Film Type : <input type="${"text"}" placeholder="${"Film Type"}"${add_attribute("value", location.filmType, 0)} name="${"filmType"}" required></label>
                                <label><br>Film Producer Name :
                                    <input type="${"text"}" placeholder="${"Film Producer Name"}"${add_attribute("value", location.filmProducerName, 0)} name="${"filmProducerName"}" required></label>
                                <label><br>End Date :
                                    <input type="${"text"}" placeholder="${"End Date"}"${add_attribute("value", location.endDate, 0)} name="${"endDate"}" required></label>
                                <label><br>Film Name :
                                    <input type="${"text"}" placeholder="${"Film Name"}"${add_attribute("value", location.filmName, 0)} name="${"filmName"}" required></label>
                                <label><br>District : <input type="${"text"}" placeholder="${"District"}"${add_attribute("value", location.district, 0)} name="${"district"}" required></label>
                                <label><br>Source Location ID :
                                    <input type="${"text"}" placeholder="${"Source Location ID"}"${add_attribute("value", location.sourceLocationId, 0)} name="${"sourceLocationId"}" required></label>
                                <label><br>Film Director Name :
                                    <input type="${"text"}" placeholder="${"Film Director Name"}"${add_attribute("value", location.filmDirectorName, 0)} name="${"filmDirectorName"}" required></label>
                                <label><br>Adress :
                                    <input type="${"text"}" placeholder="${"Address"}"${add_attribute("value", location.address, 0)} name="${"address"}" required></label>
                                <label><br>Start Date :
                                    <input type="${"text"}" placeholder="${"Start Date"}"${add_attribute("value", location.startDate, 0)} name="${"startDate"}" required></label>
                                <label><br>Year :
                                    <input type="${"text"}" placeholder="${"Year"}"${add_attribute("value", location.year, 0)} name="${"year"}" required></label>
                                <label><br>__v :
                                    <input type="${"text"}" placeholder="${"__v"}"${add_attribute("value", location.__v, 0)} name="${"__v"}" readonly></label>
                                <button type="${"submit"}">Save Edit</button></form>
                            <button>Delete</button>` : ``}
                        ${role != "admin" ? `<li>ID:     			${escape(location._id)}</li>
                            <li>Film Type:			${escape(location.filmType)}</li>
                            <li>Film Producer Name:	${escape(location.filmProducerName)}</li>
                            <li>End Date:			${escape(location.endDate)}</li>
                            <li>Film Name:			${escape(location.filmName)}</li>
                            <li>District:			${escape(location.district)}</li>
                            <li>Geolocation:		${escape(location.geolocation)}</li>
                            <li>Coordinates:		${escape(location.coordinates)}</li>
                            <li>Type:				${escape(location.type)}</li>
                            <li>Source Location ID:	${escape(location.sourceLocationId)}</li>
                            <li>Film Director Name:	${escape(location.filmDirectorName)}</li>
                            <li>Address:			${escape(location.address)}</li>
                            <li>Start Date:			${escape(location.startDate)}</li>
                            <li>Year:				${escape(location.year)}</li>
                            <li>__v:				${escape(location.__v)}</li>` : ``}` : ``}
                </li>`;
  })}</ul>`}</body>`;
});
export {
  Page as default
};
