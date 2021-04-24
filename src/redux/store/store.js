import cartReducers from '../reducers/cartReducers';
const { createStore } = require("redux");

export const store = createStore(cartReducers);