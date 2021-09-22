import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import ShoppingCartButton from './components/ShoppingCartButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(product) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, product],
    });

    // this.setState((prevState) => ({
    // cart: [...prevState.cart, product],
    // }));
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <div>
          <ShoppingCartButton />
          <Switch>
            <Route exact path="/">
              <Home onAdd={ this.addCart } />
            </Route>
            <Route path="/shoppingcart">
              <ShoppingCart cart={ cart } />
            </Route>
            <Route
              path="/productdetails/:id"
              component={ (props) => <ProductDetails { ...props } onAdd={ this.addCart } /> } 
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
