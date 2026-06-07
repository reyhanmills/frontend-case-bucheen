import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection></HeroSection>
      <About></About>
    </main>
  )
}

export default App