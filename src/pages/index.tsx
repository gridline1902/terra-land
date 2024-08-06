
import { Faqs } from '../components/sections/Faqs'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { PrimaryFeatures } from '../components/sections/PrimaryFeatures'
import { Testimonials } from '../components/sections/Testimonials'


const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <PrimaryFeatures />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
};

export default Home;
