import React, { Component } from 'react';

class PaymentMethod extends Component {
  render() {
    return (
      <section>
        <p>Forma de Pagamento</p>
        <form>
          <label htmlFor="boleto">
            <input name="payment-menthod" type="radio" />
            Boleto
          </label>
          <label htmlFor="credit-card">
            <input name="payment-menthod" type="radio" />
            Cartão de crédito Visa
          </label>
          <label htmlFor="credit-card">
            <input name="payment-menthod" type="radio" />
            Cartão de crédito MasterCard
          </label>
          <label htmlFor="credit-card">
            <input name="payment-menthod" type="radio" />
            Cartão de crédito Elo
          </label>
          <label htmlFor="paypal">
            <input name="payment-menthod" type="radio" />
            PayPal
          </label>
        </form>
      </section>
    );
  }
}

export default PaymentMethod;
