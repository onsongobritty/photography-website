import Navbar from "./Navbar.js"
import Home from "./Home.js"
import About from "./About.js"
import Gallery from "./Gallery.js"
import datamain from "./data.js"
import Services from "./Services.js"
import "./App.css"


export default function App () {

  return (
  <div>
  <Navbar/>
  <Home />
  <About/>
  <Gallery  data={datamain.data}/>
  <Services/>


  </div>
  )
  
}
