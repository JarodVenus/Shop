import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(import.meta.env.VITE_COMMERCE_API_KEY, true);