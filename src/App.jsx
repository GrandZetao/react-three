import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App
