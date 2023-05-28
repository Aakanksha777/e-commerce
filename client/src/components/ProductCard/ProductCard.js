import React from 'react'

const ProductCard = ({image, description, price}) => {
  return (
    <div style={{border : "1px solid black"}}>
      {/* <img src='' alt='product'/> */}
      <div className='product-image'>product-image</div>
      <div className='product-description'>product-description</div>
      <div className='product-price'>product-price</div>
    </div>
  )
}

export default ProductCard
