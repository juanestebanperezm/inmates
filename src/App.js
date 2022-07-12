import "./App.css";

import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cards/>
      
    </div>
  );
}

export default App;
