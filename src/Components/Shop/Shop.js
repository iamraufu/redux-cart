import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Row } from 'antd';


const Shop = () => {
      const [product, setProduct] = useState([])
      const url = 'https://emaajohn.herokuapp.com/products?search=';
      // const [loading,setLoading] = useState(false);

      // useEffect(() =>{
      //       setLoading(true)
      //       setTimeout(()=>{
      //             setLoading(false)
      //       },3000)
      // },[])

      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [])
      return (
            <div>
                  <h1 className='text-center text-uppercase' style={{color:'goldenRod'}}>Welcome to Raufu Prezens Online Shop</h1>
                  <div className="container">
                        <Row justify="space-around">
                              {
                                    product.map(product => <Product product={product}></Product>)
                              }
                        </Row>
                  </div>
            </div>
      );
};

export default Shop;