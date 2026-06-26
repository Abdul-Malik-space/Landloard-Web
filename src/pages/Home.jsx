import Navbar from "../components/Navbar"
import HeroSlider from "../components/HeroSlider"
import EicrIntroSection from "../components/EicrIntroSection"
import ServicesSection from "../components/ServicesSection"
import WhyChooseUs from "../components/WhyChooseUs"
import FAQSection from "../components/FAQSection"
import EicrSafetySection from "../components/EicrSafetySection"
import ProcessSection from "../components/ProcessSection"
import ReviewsSection from "../components/ReviewsSection"
import Footer from "../components/Footer"
import WhyLandlordsNeedSection from "../components/WhyLandlordsNeedSection"
import LegalRequirementsSection from "../components/LegalRequirementsSection"
import QuoteContactSection from "../components/QuoteContactSection"
import ServiceAreasSection from "../components/ServiceAreasSection"
import BlogSection from "../components/BlogSection"
import TenantProtectedSection from "../components/TenantProtectedSection"
import AccreditationsSection from "../components/AccreditationsSection"
import MapImageSection from "../components/MapImageSection"

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      
      <EicrIntroSection />
      <WhyLandlordsNeedSection />
      <ServicesSection />
      
      <WhyChooseUs />
      <FAQSection />
      <EicrSafetySection />
      <LegalRequirementsSection />
      <ProcessSection />
      <TenantProtectedSection />
      <QuoteContactSection />
      
      <ReviewsSection />
      <ServiceAreasSection />
      <AccreditationsSection />
      <MapImageSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home