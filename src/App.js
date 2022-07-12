import "./App.css";

import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Prueba from "./components/cards/Prueba";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Prueba /> */}
      <About />
      <Cards />
      
    </div>
  );
}

export default App;
