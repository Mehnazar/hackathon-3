import React from 'react'
import HeroBlock1 from '../components/HeroBlock1'
import FeatureBlock from '../components/FeatureBlock'
import Listing from '../components/Listing'
import Popular from '../components/Popular'
import Info from '../components/Info'
import SignUp from '@/components/SignUp'
import SubscriberList from '@/components/SubscriberList'
import ProductGrid from '@/components/ProductGrid'
import { Product } from './types/product'

const Home = () => {
  
  return (
    <div>
      <HeroBlock1/>
      <FeatureBlock/>
      <Listing/>
      <Popular/>
      <SignUp/>
      <Info/>
      <SubscriberList/>
      <ProductGrid products={[]} addToCart={function (product: Product): void {
        throw new Error('Function not implemented.')
      } }/>
  

    
    </div>
  )
}

export default Home
