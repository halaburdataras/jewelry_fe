import { getItems, setItems } from "../../client";

export const createRing = async (ring) => {
  const ringInfo = `
      mutation ($ring: RingInput!) {
        addRing(ring: $ring) {
          id
          name
          description
          price
          photo
        }
      }
    `;
  const result = await setItems(ringInfo, {
    ring,
  });
  return result.data.createRing;
};

export const getAllRings = async (limit) => {
  const ringInfo = `
      query ($limit: Int!) {
        getAllRings(limit: $limit) {
          items {
            id
            name
            description
            price
            photo
          }
        }
      }
    `;

  const result = await getItems(ringInfo, { limit });
  return result.data.getAllRings.items;
};

export const getRingById = async (id) => {
  const ringInfo = `
      query ($id: ID!) {
        getRingById(id: $id) {
          ... on Ring {
            id
            name
            description
            price
            photo
          }
        }
      }
    `;
  const result = await getItems(ringInfo, { id });

  return result.data.getRingById;
};
