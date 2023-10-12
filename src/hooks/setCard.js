import { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const useStoreCart = (products) =>{
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const strodCard = getShoppingCart();
       const savedCard = [];
        for(const id in strodCard){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                addedProduct.quantity = strodCard[id];
                savedCard.push(addedProduct);
            }
        }

        setCart(savedCard);
    },[products]);
    return [cart, setCart];
}
export default useStoreCart;
