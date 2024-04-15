import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Silde from '../Silde/slide'
import Products from "../Products/products"


const Home = () => {
  return (
    <div>
      <Header/>
        <Silde/>
        <Products/>
      <Footer/>
    </div>
  )
}

export default Home
