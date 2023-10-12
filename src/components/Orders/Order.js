import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useStoreCart from '../../hooks/setCard';
import UseSetProducts from '../../hooks/setProduct';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Order = () => {

    const [products, setProducts] = UseSetProducts([]);
    const [cart, setCart] = useStoreCart(products);

    const handlerRemoveItem = (product) => {
       const rest = cart.filter(pd => pd.id !== product.id);
       setCart(rest);
       removeFromDb(product.id);
    }

    const HandelClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shoping_container'>
            <div className="shoping_products order-items">
               {
                cart.map(product => <ReviewItem 
                    key={product.id} 
                    product={product}
                    handelRemoveItem={handlerRemoveItem}
                    ></ReviewItem>)
               }
            </div>
            <div className="shoping_cart">
               <Cart cart={cart} HandelClearCart={HandelClearCart}>
                    <Link to='/inventory'> <button className='al_btn btn-orenge'> Proceed Checkout <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></button> </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Order;