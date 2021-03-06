import React from 'react';
import PropTypes from 'prop-types';

class CheckoutComponent extends React.Component {
  render() {
    const { handleOnChange } = this.props;

    return (
      <section>
        <form>
          <h3>Informações do Comprador</h3>
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            onChange={ handleOnChange }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            data-testid="checkout-email"
            onChange={ handleOnChange }
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            data-testid="checkout-cpf"
            onChange={ handleOnChange }
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            data-testid="checkout-phone"
            onChange={ handleOnChange }
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            data-testid="checkout-cep"
            onChange={ handleOnChange }
          />
          <input
            name="adress"
            placeholder="Endereço Completo"
            data-testid="checkout-address"
            onChange={ handleOnChange }
          />
        </form>
      </section>
    );
  }
}

CheckoutComponent.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};

export default CheckoutComponent;
