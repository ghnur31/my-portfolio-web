import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Resume from "./components/Resume"
import Service from "./components/Service"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChartPie, faCircleUp, faCode, faLink, faPaintBrush, faPlus, faXmark, fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFontAwesome, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSun } from "@fortawesome/free-regular-svg-icons"


library.add(fas, faSun, faFontAwesome, faLinkedin, faInstagram, faGithub, faFacebook, faCode, faChartPie, faPaintBrush, faLink, faPlus, faCircleUp, faBars, faXmark)


function App() {
  
  return (
    <div className="dark:bg-dark dark:text-white">
      
      <Navbar/>
      <Hero/>
      <Resume/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>      
    </div>
  )
}

export default App
