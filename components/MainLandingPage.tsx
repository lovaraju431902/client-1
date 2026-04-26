import React from 'react'
import Header from './site/Header'
import Hero from './site/Hero'
import Featured from './site/Featured'
import Stats from './site/Stats'
import MapBanner from './site/MapBanner'
import WhatsAppButton from './site/WhatsappButton'
import Testimonial from './site/Testinomials'
import Listings from './site/Listings'
import Cta from './site/Cta'
import Footer from './site/Footer'
import Faq from './site/Faq'


const Mainlandingpage = () => {
  return (
    <div>
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Featured />
      <Stats />
      <MapBanner />
      <Listings />
      <Faq />
      <Testimonial />
      <Cta />
      <Footer />
      <WhatsAppButton />
    </main>


    </div>
  )
}

export default Mainlandingpage