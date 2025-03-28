import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Pokemon from "./components/Pokemon";

function App() {
  return (
          <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/pokemon" element={<Pokemon/>}/>
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
