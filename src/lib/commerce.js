import Commerce from "@chec/commerce.js";
// process.env.REACT_APP_COMMERCE_API_KEY
export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_API_KEY, true);