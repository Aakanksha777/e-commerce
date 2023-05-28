import React from 'react'
import '../LandingPage/LandingPage.css'
import ProductCard from '../ProductCard/ProductCard'

const LandingPage = () => {
  return (
    <div className='main-landing-page'>
    {/* 1 div  */}
      <div className='categories'>
        <div className='products'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
      </div>

    {/* 2 div  */}
    <div className='hero-image'>
        {/* <img src='' alt='hero-image'/> */}
        image will be shown
    </div>

    {/* 3 div  */}
    {/* <div className='sub-categories'>
        contains 2 div
    </div> */}

    </div>
  )
}

export default LandingPage
