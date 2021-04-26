import React from 'react';
import Product from '../Product/Product';
import { Row } from 'antd';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';


const Shop = (props) => {
      const {products, addToCart} = props;
      
      return (
            <div>
                  <h1 className='text-center text-uppercase' style={{ color: 'goldenRod' }}>Welcome to Raufu Prezens Online Shop</h1>
                  <div className="container">
                        <Row justify="space-around">
                              {
                                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                              }
                        </Row>
                  </div>
            </div>
      );
};

const mapStateToProps = state => {
      return {
            products: state.products
      }
}

const mapDispatchToProps = {
      addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);