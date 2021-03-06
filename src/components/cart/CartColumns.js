import React, { Component } from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid d-none d-lg-block mt-10">
                <div className="row">
                    <div className="col-10  col-lg-2">
                        <p className="text-uppercase">products</p>
                    </div>

                    <div className="col-10  col-lg-2">
                        <p className="text-uppercase">name of product</p>
                    </div>

                    <div className="col-10  col-lg-2">
                        <p className="text-uppercase">price</p>
                    </div>

                    <div className="col-10 col-lg-2">
                        <p className="text-uppercase">quantitiy</p>
                    </div>

                    <div className="col-10  col-lg-2">
                        <p className="text-uppercase">remove</p>
                    </div>

                    <div className="col-10 col-lg-2">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartColumns;