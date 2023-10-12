import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Product.css';
const Product = ({HandelAddtoCart, product}) => {
    const {img, name, price, seller, ratings} = product;

    const [imgSrc, setImgSrc] = useState('https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg');
    useEffect(() => {
        const img2 = new Image();
        img2.src = img;
        img2.onload = () => {
          setImgSrc(img);
        };
      }, [img]);



    return (
        <div className='product'>
            <img src={imgSrc} alt={name} />
            <div className="product_info">
                <div className="product_upper_info">
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                </div>
                <div className="product_lower_info">
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Rating : {ratings} start </small></p>
                </div>
            </div>
            <button onClick={()=> HandelAddtoCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;