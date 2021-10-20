import React from "react";
import {
  Home,
  Products,
  News,
  About,
  Favorites,
  Delivery,
  NewsDetail,
  Profile,
  ProductDetail,
  NotFoundPage,
  Order,
  OrderList,
  Collections,
  CollectionProducts,
  SearchPage,
  HistoryInfo,
} from "./pages";
import { Header, Footer, Burger } from "./components";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./assets/scss/styles.scss";
import { user_loading } from "./redux/actions/auth";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(user_loading());
  }, []);

  return (
    <div className="app">
      <Header />
      <Burger />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route exact path="/news" component={News} />
        <Route path="/about" component={About} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/collections" component={Collections} />
        <Route path="/collection/:id" component={CollectionProducts} />
        <Route path="/delivery" component={Delivery} />
        <Route exact path="/news/:id" component={NewsDetail} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route path="/order" component={Order} />
        <Route path="/order-list" component={OrderList} />
        <Route exact path="/history-info" component={HistoryInfo} />
        <Route path="/search-products" component={SearchPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
