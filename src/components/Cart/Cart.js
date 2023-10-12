import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart,children,HandelClearCart} = props;
  
    let total = 0;
    let shipping_cost = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity; 
        total = total + (product.price * quantity);
        shipping_cost = shipping_cost + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping_cost + tax).toFixed(2);
    
    return (
        <div className='cart_info'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping_cost}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <div className="al_cart_buttos">
                <button onClick={()=>{HandelClearCart()}} className='al_btn btn-danger'>Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
               {
                children
               }
            </div>
        </div>
    );
};

export default Cart;