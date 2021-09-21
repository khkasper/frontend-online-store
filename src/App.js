import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import ShoppingCartButton from './components/ShoppingCartButton';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ShoppingCartButton />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/productdetails/:id" component={ ProductDetails } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
