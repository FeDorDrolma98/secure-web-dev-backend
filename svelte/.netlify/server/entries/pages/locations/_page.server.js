import { r as redirect } from "../../../chunks/index.js";
import { g as get, a as patch } from "../../../chunks/api.js";
async function load({ locals, request, response }) {
  let jwt = locals.jwt;
  let body = await get("locations", jwt);
  return { body, jwt };
}
const actions = {
  // @ts-ignore
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const user = {
      _id: data.get("_id"),
      filmType: data.get("filmType"),
      filmProducerName: data.get("filmProducerName"),
      endDate: data.get("endDate"),
      filmName: data.get("filmName"),
      district: data.get("district"),
      coordinates: data.get("coordinates"),
      sourceLocationId: data.get("sourceLocationId"),
      filmDirectorName: data.get("filmDirectorName"),
      address: data.get("address"),
      startDate: data.get("startDate"),
      year: data.get("year"),
      __v: data.get("__v")
    };
    await patch(`locations/${user._id}`, user, locals.jwt);
    throw redirect(307, "/locations");
  }
};
export {
  actions,
  load
};
