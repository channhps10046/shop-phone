import React, { Component } from 'react';

const CartItem = ({item, value}) => {
    const {id, title, img, price, total, count} = item;
    const {increment,  decrement, removeItem} = value;
        return (
            <div className="row my-1 text-capitalize">
                <div className="col-10  col-lg-2">
                    <img src={img} style={{width: '5rem', height: '5rem'}} className="img-fluid" alt="product"/>
                </div>
                <div className="col-10  col-lg-2">
                    <span className="d-lg-none">product: </span>
                    {title}
                </div>
                <div className="col-10  col-lg-2">
                <span className="d-lg-none">price: </span>
                    {price}
                </div>
                
                <div className="col-10 col-lg-2 ">
                    <div className="d-flex">
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>

                <div className="col-10 col-lg-2 ">
                    <div className="cart-icon" onClick={() => removeItem(id)}>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>

                <div className="col-10 col-lg-2 ">
                    <strong>item total: $ {total}</strong>
                </div>
            </div>
        );
}

export default CartItem;