import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Showcase from "./components/Showcase.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase />
    </main>
  )
}

export default App
