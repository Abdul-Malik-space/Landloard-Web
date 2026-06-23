import Navbar from "../components/Navbar"
import HeroSlider from "../components/HeroSlider"
import EicrIntroSection from "../components/EicrIntroSection"
import ServicesSection from "../components/ServicesSection"
import WhyChooseUs from "../components/WhyChooseUs"
import FAQSection from "../components/FAQSection"
import EicrSafetySection from "../components/EicrSafetySection"
import ReviewsSection from "../components/ReviewsSection"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      
      <EicrIntroSection />
      <ServicesSection />
      <WhyChooseUs />
      <FAQSection />
      <EicrSafetySection />
      <ReviewsSection />
      <Footer />
    </>
  )
}

export default Home