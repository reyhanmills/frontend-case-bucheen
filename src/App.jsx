import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import MostPopular from './components/MostPopular'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection></HeroSection>
      <About></About>
      <HowItWorks></HowItWorks>
      <MostPopular></MostPopular>
    </main>
  )
}

export default App