import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import ShoppingCartButton from './components/ShoppingCartButton';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      cartList: [],
      quantity: 0,
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  setQuantity = (quantity, id) => {
    this.setState((prev) => {
      const cartList = prev.cartList.map((item) => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
      return { cartList };
    }, () => this.setCartQuantity());
  }

  setLocalStorage = () => {
    localStorage.setItem('quantity', JSON.stringify(this.state));
  }

  getLocalStorage = () => {
    const stateStorage = JSON.parse(localStorage.getItem('quantity'));
    this.setState({ ...stateStorage });
  }

  setCartQuantity = () => {
    const { cartList } = this.state;
    const totalQuantity = cartList
      .map(({ quantity }) => quantity)
      .reduce((total, quantityItem) => total + quantityItem, 0);
    this.setState({ quantity: totalQuantity }, () => this.setLocalStorage());
  }

  cartQuantity = () => {
    const { itemList } = this.state;
    const cartList = itemList.reduce((list, item) => {
      const includes = list.some(({ id }) => item.id === id);
      if (includes) return list;
      item.quantity = itemList.filter(({ id }) => id === item.id).length;
      return [...list, item];
    }, []);
    this.setState({ cartList }, () => this.setCartQuantity());
  }

  addItem = (product) => {
    this.setState((previousState) => ({
      itemList: [...previousState.itemList, product],
    }), () => this.cartQuantity());
  }

  removeItem = (idItem) => {
    this.setState((prev) => {
      const clearList = prev.itemList.filter(({ id }) => id !== idItem);
      return { itemList: clearList };
    }, () => this.cartQuantity());
  }

  render() {
    const { cartList, quantity } = this.state;
    return (
      <BrowserRouter>
        <div>
          <ShoppingCartButton quantity={ quantity } />
          <Switch>
            <Route exact path="/">
              <Home onAdd={ this.addItem } />
            </Route>
            <Route
              path="/checkout"
              render={ ((props) => <Checkout { ...props } cartList={ cartList } />) }
            />
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
                (props) => (<ProductDetails { ...props } onAdd={ this.addItem } />)
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
