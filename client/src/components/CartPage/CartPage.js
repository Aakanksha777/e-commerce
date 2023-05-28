import React from 'react'
import '../CartPage/CartPage.css'

const CartPage = () => {
  return (
    <>
    <h2>My Cart</h2>
    <div className='main-cart-page'>
       
        {/* first section  */}

      <div className='cart-product-page'>
        <div className='cart-product-image'>image</div>
        <div className='cart-product-description'>
            <h3>Men Premium Jacket</h3>
            <p>INR 2,000</p>
            <p>50% Off</p>
            <p>Quantity - </p>
            <button>Remove From Cart </button>
            <button>Move To Wishlist </button>
        </div>
      </div>

      {/* second section  */}
      <div className='cart-product-price'>
        <h3>Price Details </h3>
        <hr/>
        <p>Price (1 Item) : INR 2,000</p>
        <p>Discount : -INR 1,000 </p>
        <p>Delivery Charges : INR 499</p>
        <h3>TOTAL AMOUNT : INR 2499</h3>
        <hr/>
        <p>You Will Save INR 1,000 on this Order</p>

        <button>PLACE ORDER</button>
      </div>
    </div>
    </>
  )
}

export default CartPage
