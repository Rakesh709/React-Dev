import React from 'react'
import { useEffect,useState } from 'react'

function useProductList() {
    const [ products, setProducts] = useState([])
    
    const getProducts= async()=>{
        const productList = await fetch('https://fakestoreapi.com/products');
        const productListJSON= await productList.json();
        setProducts(productListJSON);
        
    }

    useEffect(()=>{
            getProducts()
        },[])

  return {products}
}

export default useProductList