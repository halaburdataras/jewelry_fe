export const clearLocalStorage = () => {
  const jewelry = {
    cart: [],
    order: [],
  };
  localStorage.setItem("Jewelry", JSON.stringify(jewelry));
};

if (!localStorage.getItem("Jewelry")) {
  clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem("Jewelry"));
  if (!localObject) {
    return null;
  }
  return localObject[name];
};

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem("Jewelry"));
  localObject[name] = item;
  localStorage.setItem("Jewelry", JSON.stringify(localObject));
};
