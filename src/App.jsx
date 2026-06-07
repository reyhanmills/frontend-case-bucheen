import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection></HeroSection>
      <About></About>
      <HowItWorks></HowItWorks>
    </main>
  )
}

export default App