import "../../chunks/index.js";
async function load({ parent }) {
  await parent();
}
export {
  load
};
