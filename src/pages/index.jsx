
import { Faqs } from './components/Faqs'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { PrimaryFeatures } from './components/PrimaryFeatures'
import { Testimonials } from './components/Testimonials'


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
