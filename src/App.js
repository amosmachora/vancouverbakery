import "./App.css";
import BakerySlider from "./components/Bakeryslider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navcomponent from "./components/Navcomponent";

import Paragraphandmainimg from "./components/Paragraphandmainimg";

function App() {
  return (
    <>
      <Navcomponent />
      <BakerySlider />
      <Paragraphandmainimg />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
