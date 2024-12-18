import React from 'react'



function ProductCard({title,imageUrl,price}) {
  return (
    <div className='w-1/5 space-x-3'>
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default ProductCard