import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import MostPopular from './components/MostPopular'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection></HeroSection>
      <About></About>
      <HowItWorks></HowItWorks>
      <MostPopular></MostPopular>
      <Comments></Comments>
      <Footer></Footer>
    </main>
  )
}

export default App