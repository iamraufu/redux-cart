import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
      const {cart, removeFromCart} =props;
      return (
            <div class="position-fixed">
                  <h2 className='text-center text-success'>Your Shopping Cart</h2>
                  <table class="table table-striped">
                        <thead>
                              <tr>
                                    <th>Orders</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    cart.map(pd=>

                                          <tr className="table-light">
                                                <td className="table-light">{pd.name}</td>
                                                <button onClick={()=>removeFromCart(pd.cartId)} className='btn'>Remove</button>
                                          </tr>


                                    )

                              }
                        </tbody>
                  </table>
            </div>
      );
};

const mapStateToProps = state => {
      return{ 
            cart:state.cart
      }
}

const mapDispatchToProps = {
      removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);