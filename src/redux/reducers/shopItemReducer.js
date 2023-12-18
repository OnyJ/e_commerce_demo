// ShopItem est l'article qu'on est en train 
//   d'éditer dans notre application.
// On veut pouvoir y accédedr depuis n'importe-où
//   dans l'application (pour éditer par exemple)

const initialState = [];

const shopItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP_ITEM":
      return [...state, action.payload];
    case "DELETE_SHOP_ITEM":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
