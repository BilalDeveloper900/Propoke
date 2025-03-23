import React from 'react'
import Hero from '../components/Home/Hero'
import FeaturedListing from '../components/Home/FeaturedListing'
import VisionMission from '../components/Home/VisionMission'
import StepsToBuy from '../components/Home/StepsToBuy'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import TestimonialSlider from '../components/Home/TestimonialSlider'
import HomeCtaSection from '../components/Home/HomeCtaSection'

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedListing />
      <VisionMission />
      <StepsToBuy />
      <WhyChooseUs/>
      <TestimonialSlider/>
      <HomeCtaSection/>
    </div>
  )
}

export default page