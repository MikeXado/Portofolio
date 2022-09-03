import "./App.scss";
import Home from "./sections/home/Home";
import Tech from "./sections/tech/Tech";
import About from "./sections/about/About";
import Portofolio from "./sections/portofolio/Portofolio";
import Faq from "./sections/faq/Faq";
import Mail from "./components/mailme/Mail";
function App() {
  return (
    <div className="App">
      <Home />
      <Tech />
      <About />
      <Portofolio />
      <Faq />
      <Mail />
    </div>
  );
}

export default App;
