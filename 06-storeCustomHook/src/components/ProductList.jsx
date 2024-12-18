import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from './ProductCard'
import useProductList from '../hooks/useProductList'

function ProductList() {

    // const [ products, setProducts] = useState([])

    // useEffect(()=>{
    //     getProducts()
    // },[])

    // const getProducts= async()=>{
    //     const productList = await fetch('https://fakestoreapi.com/products');
    //     const productListJSON= await productList.json();
    //     setProducts(productListJSON);
        
    // }

    //calling Hooks
    const {products} = useProductList();

  return (
    <div className='flex flex-wrap justify-around '>
    {
        products.map(product => <ProductCard key={product.id} title={product.title} imageUrl={product.image} price={product.price}/>)
    }
    </div>
  )
}

export default ProductList

// this compone tis doing 2 thing making api call then 
//render the component
//single response respinsisbilyt nhi rhi 