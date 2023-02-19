import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

export async function load({ parent, url }) {
    const { user } = await parent();
    if (user) return redirect(307, '/');
    const para = url.searchParams.get('error');
    return { para };
}


export const actions = {
    default: async ({ cookies, request,locals}) => {
        const data = await request.formData();
        const user = {
            username: data.get('username'),
            password: data.get('password'),
        };

        const  { jwt } = await api.post('users/login', user);
        if (jwt.errors) {
            return fail(401, jwt);
        }

        cookies.set('jwt', jwt, { path: '/' });
        locals.jwt = jwt;
        return jwt;
    },
};
