import React from 'react'
import { 
    MarketingFooter, 
    MarketingPricing,  
    HeroLayout2, 
    Features2x3,
} from 'ui-components'

import Header from './Header'

const Home = () => {
  return (
    <div>
        {/* The navbar that have the navigation routes */}
        <Header />
        {/* These are the components that come from amplify pull that are auto generated from Figma */}
        <HeroLayout2 />
        <Features2x3 />
        <MarketingPricing />
        <MarketingFooter />
    </div>
  )
}

export default Home