import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product,handelRemoveItem} = props;
    const {img,name,price,shipping,quantity} = product;
   
    return (
        <div className='order_item_card'>
            <div className="item_image_box">
                <img src={img} alt={name} />
            </div>
            <div className="order_item_details">
                <h3>{name}</h3>
                <p>Price : <span>{price}</span></p>
                <p>Shipping Charge : <span>{shipping}</span></p>
                <p>Quantity : <span>{quantity}</span></p>
            </div>
            <div className="item_buttons">
                <button onClick={()=>{handelRemoveItem(product)}} className='item_delete_button'> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default ReviewItem;