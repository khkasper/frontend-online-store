import React, { Component } from 'react';
import CheckoutComponent from '../components/CheckoutComponent';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  render() {
    return (
      <section>
        <CheckoutComponent />
        <PaymentMethod />
        <br />
        <button type="button">
          Finalizar compra
        </button>
      </section>
    );
  }
}
export default Checkout;
