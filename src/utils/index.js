export const findQuantity = (items) => {
  let sum = 0;
  items.forEach((item) => (sum += item.quantity));
  return sum;
};

export const findPrice = (items) => {
  let sum = 0;
  items.forEach((item) => (sum += item.price * item.quantity));
  return sum;
};

export const checkLength = (item) => {
  return item?.length > 0;
};

export const getIdArray = (array) => {
  return array.map((el) => el.id);
};
