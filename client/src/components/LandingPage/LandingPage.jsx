import React from 'react'
import '../LandingPage/LandingPage.css'
import ProductCard from '../ProductCard/ProductCard'
import HeroImage from '../../Assets/heroImage.jpg'
import MenPost1 from '../../Assets/menPost1.jpg'
import MenShoes1 from '../../Assets/menShoes1.jpg'
import Post1 from '../../Assets/post1.jpg'
import Heels from '../../Assets/heels1.jpg'

const LandingPage = () => {
  return (
    <div className='main-landing-page'>
    {/* 1 div  */}
      <div className='filter-product'>
        <div className='product-list'>
        <ProductCard PosterImage={Post1} category="Women"/>
        <ProductCard PosterImage={MenPost1} category="Men"/>
        <ProductCard PosterImage={Heels} category="Heels"/>
        <ProductCard PosterImage={MenShoes1} category="Sneakers"/>
        </div>
      </div>

    {/* 2 div  */}
    <div>
        <img  className='hero-image' src={HeroImage} alt='heroimage'/>
       
    </div>

    {/* 3 div  */}
    {/* <div className='sub-categories'>
        contains 2 div
    </div> */}

    </div>
  )
}

export default LandingPage
