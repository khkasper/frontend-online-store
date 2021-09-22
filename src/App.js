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
      itemList: [],
      cartList: [],
    };
  }

  setQuantity = (quantity, id) => {
    this.setState((prev) => {
      const cartList = prev.cartList.map((item) => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
      return { cartList };
    });
  }

  addQuantity = () => {
    const { itemList } = this.state;
    const cartList = itemList.reduce((list, item) => {
      const includes = list.some(({ id }) => item.id === id);
      if (includes) return list;
      item.quantity = itemList.filter(({ id }) => id === item.id).length;
      return [...list, item];
    }, []);
    this.setState({ cartList });
  }

  removeItem = (idItem) => {
    this.setState((prev) => {
      const clearList = prev.itemList.filter(({ id }) => id !== idItem);
      return { itemList: clearList };
    }, () => this.addQuantity());
  }

  addCart = (product) => {
    this.setState((previousState) => ({
      itemList: [...previousState.itemList, product],
    }), () => this.addQuantity());
  }

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <div>
          <ShoppingCartButton />
          <Switch>
            <Route exact path="/">
              <Home onAdd={ this.addCart } />
            </Route>
            <Route
              path="/shoppingcart"
              render={ () => (<ShoppingCart
                cartList={ cartList }
                removeItem={ this.removeItem }
                setQuantity={ this.setQuantity }
              />) }
            />
            <Route
              path="/productdetails/:id"
              component={
                (props) => <ProductDetails { ...props } onAdd={ this.addCart } />
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
