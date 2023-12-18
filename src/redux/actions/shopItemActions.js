export const addShopItem = (item) => ({
  type: "ADD_SHOP_ITEM",
  payload: item,
});

export const deleteShopItem = (id) => ({
  type: "DELETE_SHOP_ITEM",
  payload: id,
});
