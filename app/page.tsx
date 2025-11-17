import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import Portfolio from '@/app/components/Portfolio'
import Clients from '@/app/components/Clients'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}
