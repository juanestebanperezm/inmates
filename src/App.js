import "./App.css";

import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Datos from "./components/Datos/Datos";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cards/>
      <Datos/>
    </div>
  );
}

export default App;
