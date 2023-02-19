import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

export async function load({ parent, url }) {
    const { user } = await parent();
    const para = url.searchParams.get('valid');
    return { para };
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const user = {
            username: data.get('username'),
            password: data.get('password'),
        };

        const body = await api.post('users/register', user);
        if (body.errors) return fail(401, body);

        const value = btoa(JSON.stringify(body.user));
        cookies.set('jwt', value, { path: '/' });

        throw redirect(307, '/register?valid=true');
    },
};
