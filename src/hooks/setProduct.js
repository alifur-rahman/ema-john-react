import { useEffect, useState } from "react";

const UseSetProducts = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return [products,setProducts];
}
export default UseSetProducts;
