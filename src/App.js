import "./App.css";

// importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";


// importing pages
// import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// Adding google fonts

function App() {

  const URL = "https://edward-cabral-portfolio.herokuapp.com/"

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/"/>
        <Route path="/projects" element={<Projects URL={URL} />}/>
        <Route exact path="/" element={<About URL={URL} />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
