import { redirect, fail } from '@sveltejs/kit';
import * as api from '$lib/api.js';


export async function load({ locals, request, response }) {
    let jwt = locals.jwt;
    let body = await api.get('locations', jwt);
    return { body, jwt };
}

export const actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData();

        const user = {
            _id: data.get('_id'),
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: data.get('endDate'),
            filmName: data.get('filmName'),
            district: data.get('district'),
            coordinates: data.get('coordinates'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: data.get('startDate'),
            year: data.get('year'),
            __v: data.get('__v'),
        };


        const body = await api.patch(`locations/${user._id}`, user, locals.jwt);
        //on redirige pour update directement les elements
        throw redirect(307, '/locations');

        if (body.errors) {
            return fail(401, body);
        }
    },
};
