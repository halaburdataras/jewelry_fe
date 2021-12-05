import { setItems } from "../../client";

export const createCheckout = async (checkout) => {
  const checkoutInfo = `
      mutation ($checkout: CheckoutInput!) {
        addCheckout(checkout: $checkout) {
            id
        }
      }
    `;

  const result = await setItems(checkoutInfo, {
    checkout,
  });
  return result.data.addCheckout;
};
