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
            <Route exact path="/shoppingcart">
              <ShoppingCart cart={ cart } />
            </Route>
            <Route exact path="/productdetails/:id" component={ ProductDetails } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
