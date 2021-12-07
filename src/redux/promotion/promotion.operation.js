import { getItems } from "../../client";

export const getAllPromotions = async () => {
  const promotionInfo = `
      mutation {
        getAllPromotions{
          id
        }
      }
    `;

  const result = await getItems(promotionInfo);
  return result.data.getAllPromotions;
};
