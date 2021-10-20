import { combineReducers } from "redux";
import authReducer from "./auth";
import productReducer from "./productReducer";
import productInfoReducer from "./productInfoReducer";
import aboutReducer from "./aboutReducer";
import newsReducer from "./newsReducer";
import newsInfoReducer from "./newsInfoReducer";
import orderReducer from "./orderReducer";
import categoriesReducer from "./categoriesReducer";
import collectionsReducer from "./collectionsReducer";
import collectionInfo from "./collectionsInfo";
import searchReducer from "./searchReducer";
import productIsNew from "./product_is_new";
import productIsHit from "./product_is_hit";
import similarReducer from "./similarReducer";
import historyReducer from "./historyReducer";
import historyInfoReducer from "./historyInfoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  productInfo: productInfoReducer,
  about: aboutReducer,
  news: newsReducer,
  newsInfo: newsInfoReducer,
  order: orderReducer,
  categories: categoriesReducer,
  collections: collectionsReducer,
  collectionInfo: collectionInfo,
  search: searchReducer,
  productIsNew: productIsNew,
  productIsHit: productIsHit,
  similar: similarReducer,
  history: historyReducer,
  historyInfo: historyInfoReducer,
});

export default rootReducer;
