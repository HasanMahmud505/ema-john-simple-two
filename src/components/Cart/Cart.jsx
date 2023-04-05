import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart
    // const {cart} = props;
    // const total = 0;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tex = total*7/100;
    const grandTotal = total + totalShipping + tex;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>           
            <p>Tax: {tex.toFixed(2)}</p>          
            <h6>Grand Total: {Math.round(grandTotal)}</h6>
        </div>
    );
};

export default Cart;



const obj = {name :'jack',age:27}
const a= 'name' in obj;
console.log(a)


