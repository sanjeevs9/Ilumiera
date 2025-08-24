
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Mainline from "./components/Mainline"

export default function Home() {

  return(
<>
    <div className="bg-gradient-to-br from-theme-light to-white w-full min-h-screen">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Company Showcase Section */}
      {/* <CompanySection /> */}
      {/* Original Content */}
      <Mainline />
    </div>


      </>
  )
}
