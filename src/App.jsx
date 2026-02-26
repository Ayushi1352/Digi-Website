import Navbar from './components/Navbar';
import './App.css'
import HeroHeader from './components/HeroHeader';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import PlatformsSection from './components/PlatformsSection';
import WorkingProcessSection from './components/WorkingProcessSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FAQSection from './components/FAQSection';
import FreeConsultation from './components/FreeConsultation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroHeader />
        <AboutUsSection />
        <ServicesSection />
        <PlatformsSection />
        <WorkingProcessSection />
        <PortfolioSection />
        <Testimonials />
        <WhyChooseUsSection />

        <FAQSection />
        <FreeConsultation />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
