// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
//export const prerender = true;
//??????????????CA AVANT


import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({parent }) {
    // @ts-ignore
    const { user } = await parent();
    //throw redirect(307, '/locations');
}