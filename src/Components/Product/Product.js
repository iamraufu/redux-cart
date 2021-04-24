import React from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const { Meta } = Card;

const Product = (props) => {
      const { name, price, img } = props.product;
      return (
            <div className="col-sm-3 col-md-3">

            <Col className="gutter-row p-1 mt-5">
                  <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={img} />}
                        >
                        <Meta title={name} description={price} />
                        <div className="site-button-ghost-wrapper">

                              <Button type="primary" className='mt-3' ghost>
                              <FontAwesomeIcon className='mx-1' icon={faCartPlus} />Buy Now
                              </Button>
                        </div>
                  </Card>
            </Col>
                        </div>
      );
};

export default Product;