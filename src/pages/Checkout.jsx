import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckoutComponent from '../components/CheckoutComponent';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  render() {
    const { cartList } = this.props;

    return (
      <main>
        <button type="button">
          <Link to="/">Voltar</Link>
        </button>
        <section>
          <p>Revise sua lista de compras</p>
          <div>
            {Object.keys(cartList).map((item, index) => (
              <div
                key={ index }
              >
                <p>{ cartList[item].title }</p>
                <p>{ cartList[item].price }</p>
                <p>{ cartList[item].quantity }</p>
                <img src={ cartList[item].thumbnail } alt={ cartList[item].title } />
              </div>
            ))}
          </div>
          <span>
            Total: R$
            { cartList
              .map(({ price, quantity }) => price * quantity)
              .reduce((totalPrice, price) => totalPrice + price, 0) }
          </span>
        </section>
        <CheckoutComponent />
        <PaymentMethod />
        <button type="button">
          Finalizar compra
        </button>
      </main>
    );
  }
}

Checkout.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Checkout;
