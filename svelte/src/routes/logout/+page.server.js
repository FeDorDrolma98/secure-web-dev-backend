import {redirect} from "@sveltejs/kit";

export async function load({ cookies,parent }) {
    const { user } = await parent();
    cookies.delete("jwt")
    throw redirect(307, '/');
}