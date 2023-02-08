// /** @type {import('./$types').PageServerLoad} */
// export async function load({ cookies }) {
//     const user = await db.getUserFromSession(cookies.get('sessionid'));
//     return { user };
// }
//
// const usersService=require("../../../../src/users/users.service")
// const passport = require("passport");
// const httpErrorHelper = require("../../../../src/custom-errors/http-error.helper");
// const router = require("express").Router();
//
// /** @type {import('./$types').Actions} */
// export const actions = {
//     login: async ({ cookies, request }) => {
//         const data = await request.formData();
//         const username = data.get('username');
//         const password = data.get('password');
//
//         //const user = await db.getUser(username);
//         const user = await usersService.findOneForAuth(username);
//
//         //cookies.set('sessionid', await db.createSession(user));
//         cookies.set('sessionid', await db.createSession(user));
//
//         return { success: true };
//     },
//     register: async (event) => {
//         // TODO register the user
//     }
// };
//
//
//
// async function controllerRegisterUser(req, res, next) {
//     try {
//         const newUser = await usersService.createOne(req.body);
//         return res.status(201).json(newUser);
//     } catch (e) {
//         return httpErrorHelper(e, req, res, next);
//     }
// }
// router.post("/register", controllerRegisterUser);
//
//
// async function generateJwt(req, res) {
//     const jwt = await usersService.generateJwt(req.user);
//     return res.status(200).json({ jwt });
// }
// router.post(
//     "/login",
//     passport.authenticate("local", {
//         session: false,
//     }),
//     generateJwt
// );
//
//
// async function controllerFindSelf(req, res) {
//     const user = await usersService.findOne(req.user?._id);
//     return res.status(200).send(user);
// }
// router.get(
//     "/me",
//     passport.authenticate("jwt", { session: false }),
//     controllerFindSelf
// );
//
//
// async function controllerUpdateSelf(req, res) {
//     try {
//         const user = await usersService.updateOne(req.user?._id, req.body);
//         return res.status(200).send(user);
//     } catch (e) {
//         return httpErrorHelper(e, req, res, next);
//     }
// }
// router.patch(
//     "/me",
//     passport.authenticate("jwt", { session: false }),
//     controllerUpdateSelf
// );
//
//
// async function controllerDeleteUser(req, res, next) {
//     try {
//         await usersService.deleteOne(req.user._id);
//         return res.status(200).json({ message: "User deleted." });
//     } catch (e) {
//         return httpErrorHelper(e, req, res, next);
//     }
// }
// router.delete(
//     "/me",
//     passport.authenticate("jwt", { session: false }),
//     controllerDeleteUser
// );
//
//
// module.exports = router;