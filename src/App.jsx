import Navbar from "./Component/Navbar/Navbar"
import Intro from "./Component/Intro/Intro"
import Skills from "./Component/Skills/Skills"
import Work from "./Component/Works/Work"
import Contact from "./Component/Contacts/Contact"
import Footer from "./Component/Footer/Footer"
function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
      
        
  )
}
export default App