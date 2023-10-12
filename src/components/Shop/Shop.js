import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useStoreCart from '../../hooks/setCard';
import UseSetProducts from '../../hooks/setProduct';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = UseSetProducts([]);
    const [cart, setCart] = useStoreCart(products);
   

    const HandelAddtoCart = (seletedProduct) =>{
        let newCart = [];
        const exist = cart.find(product => product.id === seletedProduct.id);
        if(!exist){
            seletedProduct.quantity = 1;
            newCart = [...cart,seletedProduct];
        }else{
            const rest = cart.filter(product => product.id !== seletedProduct.id);
            exist.quantity = exist.quantity+1;
            newCart = [...rest,exist];
        }

        // const newCart = [...cart,seletedProduct];
        setCart(newCart);
        addToDb(seletedProduct.id);
    }

    const HandelClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shoping_container'>
            <div className="shoping_products">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        HandelAddtoCart={HandelAddtoCart}
                        ></Product>)
                }
            </div>
            <div className="shoping_cart">
               <Cart cart={cart} HandelClearCart={HandelClearCart}>
                <Link to='/orders'> <button className='al_btn btn-orenge'> Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button> </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;