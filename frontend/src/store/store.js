import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./products/products.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth:authReducer,
    product:productReducer,
    cart:cartReducer
});

const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSe__ || compose;
export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));