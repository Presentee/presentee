import React from 'react'
import { 
    MarketingFooter, 
    MarketingPricing, 
    Features4x1, 
    HeroLayout2 } from 'ui-components'

import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header />
        <HeroLayout2 />
        <Features4x1 />
        <MarketingPricing />
        <MarketingFooter />
    </div>
  )
}

export default Home