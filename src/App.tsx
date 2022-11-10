import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './App.css';
import Content from "./components/Content";
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
      <Content/>
    </Router>
  );
}

export default App;
