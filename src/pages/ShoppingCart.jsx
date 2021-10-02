import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.sumPrice();
  }

  componentDidUpdate() {
    this.sumPrice();
  }

  sumPrice = () => {
    const { total } = this.state;
    const { cartList } = this.props;
    const sumTotal = cartList
      .map(({ price, quantity }) => price * quantity)
      .reduce((totalPrice, price) => totalPrice + price, 0);
    if (total !== sumTotal) this.setState({ total: sumTotal });
  }

  render() {
    const { total } = this.state;
    const { cartList, removeItem, setQuantity } = this.props;
    if (!cartList.length) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          <ReturnButton />
        </div>
      );
    }
    return (
      <section>
        <div>
          <p>{`Total: ${total.toFixed(2)}`}</p>
          { cartList.map((
            { id,
              price,
              quantity,
              thumbnail,
              title,
              availableQuantity,
            }, index,
          ) => (<CartItem
            key={ index }
            id={ id }
            price={ price }
            quantity={ quantity }
            thumbnail={ thumbnail }
            title={ title }
            availableQuantity={ availableQuantity }
            removeItem={ removeItem }
            setQuantity={ setQuantity }
          />))}
          <ReturnButton />
        </div>
        <Link to="/checkout">
          <button data-testid="checkout-products" type="button">Finalizar Compra</button>
        </Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      available_quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
